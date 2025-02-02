import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorShow, setErrorShow] = useState(false);
  const [login, setLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.username !== "user" || formData.password !== "password") {
      setErrorShow(true);
    } else {
      setErrorShow(false);
      setLogin(true);
    }
  };

  return (
    <>
      <div>
        <h1>Login page</h1>

        {errorShow && <p>Invalid username or password</p>}

        {login ? (
          <p>Welcome, user!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
            <br />
            <label for="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </>
  );
}
