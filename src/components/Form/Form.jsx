import { useState, useEffect } from "react";
import styles from "./Form.module.css";

const Form = ({ formData, setFormData }) => {
  // Zmieniamy nazwy zmiennych stanu na zgodne z PasswordDisplay
  const [length, setLength] = useState(formData.length || 8);
  const [uppercase, setUppercase] = useState(formData.uppercase || false);
  const [numbers, setNumbers] = useState(formData.numbers || false);
  const [symbols, setSymbols] = useState(formData.symbols || false);

  useEffect(() => {
    setFormData({
      length: Number(length),
      uppercase,
      numbers,
      symbols,
      lowercase: true, // zawsze true jako domyślne
    });
  }, [length, uppercase, numbers, symbols, setFormData]);

  return (
    <div className={styles.form}>
      <label>
        Długość hasła:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className={styles.input}
          min="3"
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={(e) => setUppercase(e.target.checked)}
        />
        Użyj wielkich liter
      </label>
      <label>
        <input
          type="checkbox"
          checked={numbers}
          onChange={(e) => setNumbers(e.target.checked)}
        />
        Użyj cyfr
      </label>
      <label>
        <input
          type="checkbox"
          checked={symbols}
          onChange={(e) => setSymbols(e.target.checked)}
        />
        Użyj symboli
      </label>
    </div>
  );
};

export default Form;
