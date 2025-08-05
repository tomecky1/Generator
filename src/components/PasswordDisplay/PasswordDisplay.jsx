import React, { useState } from "react";
import styles from "./PasswordDisplay.module.css";

const PasswordDisplay = ({ formData }) => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const generatePassword = () => {
    const { length, uppercase, lowercase, numbers, symbols } = formData;

    let chars = "";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    console.log("Wygenerowane hasło:", password);
    setGeneratedPassword(password);
  };

  const copyToClipboard = async () => {
    if (generatedPassword) {
      try {
        await navigator.clipboard.writeText(generatedPassword);
        setShowCopyMessage(true);
        setTimeout(() => setShowCopyMessage(false), 3000); // Ukryj komunikat po 3 sekundach
      } catch (err) {
        console.error("Nie udało się skopiować hasła:", err);
      }
    }
  };

  const getMaskedPassword = () =>
    generatedPassword
      ? "*".repeat(generatedPassword.length)
      : "your password will appear here";
  return (
    <div className={styles["password-display"]}>
      <div className={styles["buttons-container"]}>
        <button
          onClick={generatePassword}
          className={styles["generate-button"]}
        >
          Generuj hasło
        </button>

        {generatedPassword && (
          <>
            <button onClick={copyToClipboard} className={styles["copy-button"]}>
              Kopiuj hasło
            </button>
            <button
              onClick={() => setShowPassword((prev) => !prev)}
              type="button"
              className={styles["copy-button"]}
            >
              {showPassword ? "Ukryj" : "Pokaż"}
            </button>
          </>
        )}
      </div>
      <div className={styles["password-result"]}>
        {showPassword
          ? generatedPassword || "Your password will appear here"
          : getMaskedPassword()}
      </div>
      {showCopyMessage && (
        <div className={styles["copy-message"]}>
          Hasło zostało skopiowane do schowka!
        </div>
      )}
    </div>
  );
};

export default PasswordDisplay;
