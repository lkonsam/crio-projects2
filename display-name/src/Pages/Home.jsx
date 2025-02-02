import { useState } from "react";
import styles from "./Home.module.css";
export default function Home() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
  });

  const [submitName, setSubmitName] = useState(false);

  function inputHandler(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setSubmitName(false);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitName(true);
  };

  return (
    <>
      <form onSubmit={submitHandler} className={styles.form}>
        <h1>Full Name Display</h1>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={inputHandler}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={inputHandler}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submitName && (
        <p>
          Full Name: {formData.first_name} {formData.last_name}
        </p>
      )}
    </>
  );
}
