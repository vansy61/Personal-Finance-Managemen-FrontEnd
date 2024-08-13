import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "transaction": "Transaction",
      "description": "This is a simple description",
      "wallet": "Wallet",
      "dashboard": "Dashboard",
      "budget": "Budget",
      "category": "Category",
      "report": "Report",
      "setting": "Setting",
      "profile": "Profile",
    }
  },
  vi: {
    translation: {
      "transaction": "Giao dịch",
      "description": "Đây là một mô tả đơn giản",
      "wallet": "Ví tiền",
      "dashboard": "Tổng quan",
      "budget": "Ngân sách",
      "category": "Phân loại",
      "report": "Báo cáo",
      "profile": "Tài khoản",
      "setting": "Cài đặt"
    }
  },
  kr: {
    translation: {
      "transaction": "거래",
      "description": "이것은 간단한 설명입니다",
      "wallet": "지갑",
      "dashboard": "대시보드",
      "budget": "예산",
      "category": "카테고리",
      "report": "보고서",
      "profile": "프로필",
      "setting": "설정"
    }
  },
  cn: {
    translation: {
      "transaction": "交易",
      "description": "这是一个简单的描述",
      "wallet": "钱包",
      "dashboard": "仪表板",
      "budget": "预算",
      "category": "类别",
      "report": "报告",
      "profile": "个人资料",
      "setting": "设置"
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
