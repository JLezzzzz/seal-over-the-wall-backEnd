// routes/uploadRoutes.js
import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// กำหนด config การจัดเก็บไฟล์
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // ที่อยู่โฟลเดอร์
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // ดึงนามสกุลไฟล์
    cb(null, Date.now() + ext); // ตั้งชื่อใหม่ ป้องกันชื่อซ้ำ
  },
});

const upload = multer({ storage });

// POST /api/upload
router.post('/', upload.single('image'), (req, res) => {
  res.json({ filename: req.file.filename, path: `/uploads/${req.file.filename}` });
});

export default router;
