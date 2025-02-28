import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Css/Login.css";

export default function SignUpPage() {
    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState(""); // Added full name
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(""); // Added phone number
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Registering user:", { username, fullName, email, phone, password });

        try {
            const response = await axios.post("http://localhost:8080/user/register", {
                username,
                fullName, // Sending full name
                email,
                phone, // Sending phone number
                password
            });

            console.log("Response:", response.data);
            alert("Registration successful!");
            navigate("/login");
        } catch (err: any) {
            console.error("Registration error:", err);
            alert(err.response?.data || "Registration failed. Try again.");
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                        <label>Username</label>
                    </div>
                    
                    <div className="inputBox">
                        <input 
                            type="text" 
                            value={fullName} 
                            onChange={(e) => setFullName(e.target.value)} 
                            required 
                        />
                        <label>Full Name</label>
                    </div>

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
                            type="tel" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                        />
                        <label>Phone Number</label>
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

                    <button type="submit">Sign Up</button>
                </form>
                <p>If you already have an account, <a href="/login">Login</a></p>
            </div>
        </div>
    );
}
