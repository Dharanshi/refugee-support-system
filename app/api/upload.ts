// /app/api/upload.ts

import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

// Disable body parsing to handle file uploads with formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = new IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "Error parsing the files" });
    }

    const file = files.file;
    const tempPath = file.filepath;
    const targetPath = path.join(process.cwd(), "public/uploads", file.originalFilename);

    fs.rename(tempPath, targetPath, (err) => {
      if (err) {
        return res.status(500).json({ message: "Error saving the file" });
      }

      return res.status(200).json({ message: "File uploaded successfully" });
    });
  });
}
