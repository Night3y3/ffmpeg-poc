import express from "express";
import cors from "cors";
import upload from "./multer.js";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { exec } from "child_process";
import os from "os";
import { stderr, stdout } from "process";

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://b6236a46-f430-4067-bddf-cc285bdc8cb8-00-2ocyvrk6rop7y.sisko.replit.dev/",
    ],
    credentials: true,
  }),
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/upload", upload.single("file"), (req, res) => {
  const lessionID = uuidv4();
  const videoPath = req.file.path;
  const outputPath = `./uploads/videos/${lessionID}`;
  const hlsPath = `${outputPath}/index.m3u8`;
  console.log("hlsPath : ", hlsPath);

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}`;

  // No queue because this is POC(proof of concept), should not be used in production
  exec(ffmpegCommand, (error, stdout, stderr) => {
    if (error) {
      console.log(`exec error : ${error}`);
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    const videoUrl = `https://b6236a46-f430-4067-bddf-cc285bdc8cb8-00-2ocyvrk6rop7y.sisko.replit.dev/upload/videos/${lessionID}/index.m3u8`;
    res.json({
      message: "Video converted to HLS format",
      videoUrl: videoUrl,
      lessonId: lessionID,
    });
  });
});

app.listen(8080, () => {
  const protocol = "http"; // or 'https' if you're using HTTPS
  const hostname = os.hostname();
  console.log(`The server is running on link ${protocol}://${hostname}`);
});
