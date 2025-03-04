import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError(null);
    try {
      const url = role === "Employee" 
        ? "http://localhost:8080/employe/login" 
        : "http://localhost:8080/user/login";
      
      const response = await axios.post(url, {
        email,
        password,
      });
      if (response.data) {
        navigate("/homepage"); // Redirect to home if user exists
      } else if (role === "Customer") {
        navigate("/sign"); // Redirect only customers to sign-up if not found
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <div className="flex justify-center mb-4">
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setRole("Customer")} 
              className={`glow-on-hover text-center text-lg px-8 py-4 w-48 ${role === "Customer" ? "selected" : ""}`}>
              Customer
            </button>
            <button 
              onClick={() => setRole("Employee")} 
              className={`glow-on-hover text-center text-lg px-8 py-4 w-48 ${role === "Employee" ? "selected" : ""}`}>
              Employee
            </button>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="inputBox">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="inputBox">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          {role === "Customer" && (
            <p>
              If Not {" "}
              <a href="/sign" className="text-blue-500 cursor-pointer underline font-bold">
                Sign In
              </a>
            </p>
          )}
          <button type="submit" className="glow-on-hover w-full text-white p-3 rounded-lg text-center block">
            Login as {role}
          </button>
        </form>
      </div>
    </div>
  );
}
