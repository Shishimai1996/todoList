import React, { useState } from "react";
import "./Login.css";

type LoginProps = {
  onLogin: (token: string) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSignup, setSignup] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const API = process.env.REACT_APP_API_URL || "http://localhost:3001";

  const validateEmail = (e: string) => {
    return /[^@]+@[^.]+\..+/.test(e);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) return setError("Email and password are required");
    if (!validateEmail(email)) return setError("Invalid email address");
    setLoading(true);
    try {
      const url = `${API}/auth/${isSignup ? "signup" : "login"}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const body = await res.json();
      if (body.access_token) onLogin(body.access_token);
      else setError(body.message || "Authentication failed");
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-card">
      <h3>{isSignup ? "Sign up" : "Login"}</h3>
      <form onSubmit={submit}>
        <div className="login-row">
          <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div className="error">{error}</div>}
        <div className="login-actions">
          <button type="submit" className="primary-btn" disabled={isLoading}>{isLoading ? (isSignup ? 'Creating...' : 'Signing in...') : (isSignup ? 'Create account' : 'Login')}</button>
          <button type="button" className="secondary-btn" onClick={() => setSignup((s) => !s)} disabled={isLoading}>
            {isSignup ? "Have an account? Login" : "Create account"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
