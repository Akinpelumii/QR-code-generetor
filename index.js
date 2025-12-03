import express from "express";
import cors from "cors";
import qr from "qr-image";

const app = express();

app.use(cors());
app.use(express.json());

// POST: Generate QR Code
app.post("/generate", (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  // Generate QR as PNG stream
  const qr_png = qr.image(url, { type: "png" });

  // Set PNG header
  res.type("png");

  // Pipe QR image to the response
  qr_png.pipe(res);
});

app.listen(3001, () => {
  console.log("Backend listening on http://localhost:3001");
});
