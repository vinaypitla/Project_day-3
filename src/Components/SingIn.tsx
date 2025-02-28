import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Login.css"; // Ensure correct path

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Signed in as: ${username}`);

        navigate("/homepage");
    };

    return (
        <div className="signup-page"> {/* Unique class for Signup Page */}
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <label>Username</label>
                    </div>

                    <div className="inputBox">
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                        <label>Full Name</label>
                    </div>

                    <div className="inputBox">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label>Email</label>
                    </div>

                    <div className="inputBox">
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        <label>Phone Number</label>
                    </div>

                    <div className="inputBox">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <label>Password</label>
                    </div>

                    <p>If you already have an account, <a href="/login">Login</a></p>
                    
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    );
}
