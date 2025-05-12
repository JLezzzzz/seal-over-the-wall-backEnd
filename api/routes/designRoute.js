import express from "express";
import { verify } from "../../middlewares/verify.js";
import { Design } from "../../models/Design.js";

const router = express.Router();

//  Upload Design 
router.post("/upload", verify, async (req, res) => {
  const {
    title = '',
    description = '',
    tags = [],
    designUrl,
    productType,
    selectedColors = [],
    price = 0,
    isPublished = false,
  } = req.body;

  if (!designUrl || !productType || selectedColors.length === 0) {
    return res.status(400).json({
      error: true,
      message: "Design URL, product type, and at least one color are required.",
    });
  }

  try {
    const newDesign = new Design({
      title,
      description,
      tags,
      designUrl,
      productType,
      selectedColors,
      price,
      isPublished,
      userId: req.user.userId,
    });

    await newDesign.save();

    res.status(201).json({
      success: true,
      message: "Design uploaded successfully.",
      design: newDesign,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Server error",
      details: err.message,
    });
  }
});


//  Get User's Designs
router.get("/my-designs", verify, async (req, res) => {
  try {
    const designs = await Design.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.json({ success: true, designs });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Server error",
      details: err.message,
    });
  }
});

// Delete a Design by ID 
router.delete("/:id", verify, async (req, res) => {
  try {
    const design = await Design.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });

    if (!design) {
      return res.status(404).json({
        error: true,
        message: "Design not found or not authorized",
      });
    }

    res.json({
      success: true,
      message: "Design deleted successfully",
      deletedDesign: design,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Server error",
      details: err.message,
    });
  }
});

export default router;
