import { useState } from "react";
import "../Css/Login.css"; // Ensure the correct path

export default function LoginPage() {
    const [userType, setUserType] = useState("customer");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Logging in as ${userType}: ${username}`);
    };

    return (
        <div className="login-page"> {/* Unique class for Login Page */}
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
                            value={username} 
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)} 
                            required
                        />
                        <label>Username</label>
                    </div>
                    <div className="inputBox">
                        <input 
                            type="password" 
                            value={password} 
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                        <label>Password</label>
                    </div>

                    <p>If you have an account, <a href="/sign">Sign in</a></p>
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}
