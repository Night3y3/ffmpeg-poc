import multer from "multer";
import { v4 as uuid } from "uuid";
import path from "path";

// Multer middlware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + uuid() + path.extname(file.originalname));
  },
});

// Multer configuration
const upload = multer({ storage: storage });
export default upload;
