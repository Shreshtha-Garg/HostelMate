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

    console.log(`   🔄 [UTILS] Converting language "${targetLanguage}" to code: "${languageCode}"`);

    if (!languageCode) {
      console.log(`   ❌ [UTILS] Language "${targetLanguage}" not supported`);
      return {
        success: false,
        error: `Language "${targetLanguage}" not supported`,
      };
    }

    console.log(`   🌐 [UTILS] Calling DeepL API...`);
    // Try with free API first, if it fails, the 403 error will be more informative
    const deepLUrl = process.env.DEEPL_API_KEY?.includes(':fx') 
      ? 'https://api-free.deepl.com/v2/translate'
      : 'https://api.deepl.com/v2/translate';
    
    console.log(`   🔗 [UTILS] Using DeepL URL: ${deepLUrl}`);
    
    const response = await axios.post(deepLUrl, null, {
    params: {
        text: text,
        target_lang: languageCode,
    },
    headers: {
        Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
    },
});

    if (response.data && response.data.translations && response.data.translations.length > 0) {
      console.log(`   ✅ [UTILS] DeepL API responded successfully`);
      return {
        success: true,
        translated_text: response.data.translations[0].text,
      };
    } else {
      console.log(`   ❌ [UTILS] No translation received from DeepL`);
      return {
        success: false,
        error: 'No translation received from DeepL',
      };
    }
  } catch (error) {
    console.error(`   ❌ [UTILS] Translation error: ${error.message}`);
    return {
      success: false,
      error: error.message || 'Failed to translate text',
    };
  }
};
