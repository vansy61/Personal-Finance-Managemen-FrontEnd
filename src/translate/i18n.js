import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "transaction": "Transaction",
      "description": "This is a simple description"
    }
  },
  vi: {
    translation: {
      "transaction": "Giao dịch",
      "description": "Đây là một mô tả đơn giản",
      "wallet": "Ví tiền"
    }
  },
  kr: {
    translation: {
      "transaction": "거래", // Tiếng Hàn cho "Giao dịch"
      "description": "이것은 간단한 설명입니다" // Tiếng Hàn cho "Đây là một mô tả đơn giản"
    }
  },
  cn: {
    translation: {
      "transaction": "交易", // Tiếng Trung cho "Giao dịch"
      "description": "这是一个简单的描述" // Tiếng Trung cho "Đây là một mô tả đơn giản"
    }
  }
};
const savedLanguage = localStorage.getItem('language') || 'vi';
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;