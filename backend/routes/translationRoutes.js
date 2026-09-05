import express from 'express';
import { translateText } from '../utils/translationUtils.js';

const router = express.Router();

// POST /translate
// Request body: { text: string, target_language: string }
router.post('/', async (req, res) => {
  try {
    const { text, target_language } = req.body;

    if (!text || !target_language) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: text and target_language',
      });
    }

    const result = await translateText(text, target_language);

    if (result.success) {
      return res.json({
        success: true,
        translated_text: result.translated_text,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: result.error,
      });
    }
  } catch (error) {
    console.error('Translation route error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

export default router;
