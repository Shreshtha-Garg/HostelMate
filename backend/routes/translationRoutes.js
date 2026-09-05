import express from 'express';
import { translateText } from '../utils/translationUtils.js';

const router = express.Router();

// POST /translate
// Request body: { text: string, target_language: string }
router.post('/', async (req, res) => {
  try {
    const { text, target_language } = req.body;

    console.log('\n📥 [BACKEND] Received translation request:');
    console.log(`   📝 Text: "${text}"`);
    console.log(`   🌐 Target Language: "${target_language}"`);

    if (!text || !target_language) {
      console.log('❌ [BACKEND] Validation failed: Missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: text and target_language',
      });
    }

    console.log('⏳ [BACKEND] Processing translation with DeepL API...');
    const result = await translateText(text, target_language);

    if (result.success) {
      console.log(`✅ [BACKEND] Translation successful!`);
      console.log(`   🎯 Translated Text: "${result.translated_text}"`);
      console.log(`📤 [BACKEND] Sending response to frontend\n`);
      return res.json({
        success: true,
        translated_text: result.translated_text,
      });
    } else {
      console.log(`❌ [BACKEND] Translation failed: ${result.error}`);
      console.log(`📤 [BACKEND] Sending error response to frontend\n`);
      return res.status(400).json({
        success: false,
        error: result.error,
      });
    }
  } catch (error) {
    console.error('❌ [BACKEND] Translation route error:', error.message);
    console.log(`📤 [BACKEND] Sending error response to frontend\n`);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

export default router;
