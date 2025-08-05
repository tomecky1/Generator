import { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form/Form";
import PasswordDisplay from "./components/PasswordDisplay/PasswordDisplay";
function App() {
  const [formData, setFormData] = useState({
    length: 8,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  return (
    <>
      <h1>Generator haseł</h1>
      <div className={styles.container}>
        <Form formData={formData} setFormData={setFormData} />
        <PasswordDisplay formData={formData} />
      </div>
    </>
  );
}

export default App;
