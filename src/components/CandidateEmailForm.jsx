import { useState } from "react";

export function CandidateEmailForm({ onSubmit, loading, error }) {
  const [email, setEmail] = useState("");

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = () => {
    if (isValidEmail(email)) onSubmit(email);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="email-form">
      <p >Step 1 of 2</p>
      <h1 >Who are you?</h1>
      <p >
        Enter your email to load your candidate profile.
      </p>

      <div className="email-form__row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="your-email@example.com"
          disabled={loading}
          className="email-form__input"
          autoFocus
        />
        <button
          onClick={handleSubmit}
          disabled={loading || !isValidEmail(email)}
          className="email-form__button"
        >
          {loading ? "Loading…" : "Continue"}
        </button>
      </div>

      {error && (
        <p className="email-form__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}