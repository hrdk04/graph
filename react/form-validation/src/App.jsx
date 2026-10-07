import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");

    // Validation
    if (name.trim() === "" || email.trim() === "") {
      setError("Name and Email are required.");
      return;
    }

    // Success
    setSuccess("Form submitted successfully!");

  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>
          <br />

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <br />

        <button type="submit">
          Submit
        </button>

      </form>

      {/* Error message */}
      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {/* Success message */}
      {success && (
        <p style={{ color: "green" }}>
          {success}
        </p>
      )}

    </div>
  );
}

export default App;