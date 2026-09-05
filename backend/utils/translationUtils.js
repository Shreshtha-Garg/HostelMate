import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Map frontend language names to DeepL language codes
const languageCodeMap = {
  english: 'EN',
  hindi: 'HI',
  spanish: 'ES',
  french: 'FR',
  german: 'DE',
  portuguese: 'PT',
  russian: 'RU',
  japanese: 'JA',
  chinese: 'ZH',
  korean: 'KO',
  italian: 'IT',
  dutch: 'NL',
  polish: 'PL',
  turkish: 'TR',
};

export const translateText = async (text, targetLanguage) => {
  try {
    // Convert language name to DeepL code
    const languageCode = languageCodeMap[targetLanguage?.toLowerCase()] || targetLanguage?.toUpperCase();

    if (!languageCode) {
      return {
        success: false,
        error: `Language "${targetLanguage}" not supported`,
      };
    }

    const response = await axios.post('https://api-free.deepl.com/v2/translate', null, {
      params: {
        auth_key: process.env.DEEPL_API_KEY,
        text: text,
        target_lang: languageCode,
      },
    });

    if (response.data && response.data.translations && response.data.translations.length > 0) {
      return {
        success: true,
        translated_text: response.data.translations[0].text,
      };
    } else {
      return {
        success: false,
        error: 'No translation received from DeepL',
      };
    }
  } catch (error) {
    console.error('Translation error:', error.message);
    return {
      success: false,
      error: error.message || 'Failed to translate text',
    };
  }
};
