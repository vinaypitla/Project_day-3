import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

export default function LoginPage() {
    const [userType, setUserType] = useState("customer");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/user/login", { 
                email, 
                password, 
                userType 
            });

            alert(response.data); 
            
            navigate("/homepage");

        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed: " + (error.response?.data || "Server error"));
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Login</h2>

                <div className="user-type">
                    <label>
                        <input
                            type="radio"
                            value="customer"
                            checked={userType === "customer"}
                            onChange={() => setUserType("customer")}
                        />
                        Customer
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="employee"
                            checked={userType === "employee"}
                            onChange={() => setUserType("employee")}
                        />
                        Employee
                    </label>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <input
                            type="text"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>Email</label>
                    </div>
                    <div className="inputBox">
                        <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label>Password</label>
                    </div>

                    <p>If you already have an account, <a href="/sign">SignIn</a></p>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
