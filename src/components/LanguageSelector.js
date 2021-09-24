import React, { useContext } from "react";
import { LanguageContext } from "../constainers/Languages";
import { languageOptions } from "../languages";
const LanguageSelector = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  return (
    <select
      onChange={handleLanguageChange}
      value={userLanguage}
      className="rounded-sm"
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
