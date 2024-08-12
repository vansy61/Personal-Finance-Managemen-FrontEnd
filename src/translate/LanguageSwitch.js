import React from 'react';
import { useTranslation } from 'react-i18next';
import {Dropdown} from "react-bootstrap";

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown drop={"down-centered"}>
      <Dropdown.Toggle className="languageSwithcher" >
        <img src={`/images/flag/${i18n.language}.png`} alt=""/>
      </Dropdown.Toggle>

      <Dropdown.Menu className="languageSwithcherList">
        <Dropdown.Item href="#" onClick={() => changeLanguage('cn')} className={i18n.language === "cn" ? "active" : ""}>
          <img src={`/images/flag/cn.png`} alt=""/>
          中国
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => changeLanguage('vi')} className={i18n.language === "vi" ? "active" : ""}>
          <img src={`/images/flag/vi.png`} alt=""/>
          Việt Nam
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => changeLanguage('en')} className={i18n.language === "en" ? "active" : ""}>
          <img src={`/images/flag/en.png`} alt=""/>
          English
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => changeLanguage('kr')} className={i18n.language === "kr" ? "active" : ""}>
          <img src={`/images/flag/kr.png`} alt=""/>
          한국
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSwitch;