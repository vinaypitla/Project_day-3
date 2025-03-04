import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Css/Login.css";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        mobileNo: "", // Changed from phone to mobileNo
        password: "",
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Debugging: Log form data before sending the request
        console.log("Registering user:", formData);

        try {
            const response = await axios.post("http://localhost:8080/user/register", formData, {
                headers: { "Content-Type": "application/json" },
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
                    {/* Username Field */}
                    <div className="inputBox">
                        <input 
                            type="text" 
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange} 
                            required 
                        />
                        <label>Username</label>
                    </div>

                    {/* Full Name Field */}
                    <div className="inputBox">
                        <input 
                            type="text" 
                            name="fullName" 
                            value={formData.fullName} 
                            onChange={handleChange} 
                            required 
                        />
                        <label>Full Name</label>
                    </div>

                    {/* Email Field */}
                    <div className="inputBox">
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                        <label>Email</label>
                    </div>

                    {/* Mobile Number Field (Updated from phone to mobileNo) */}
                    <div className="inputBox">
                        <input 
                            type="tel" 
                            name="mobileNo"  // Ensure the name matches backend
                            value={formData.mobileNo} 
                            onChange={handleChange} 
                            required 
                        />
                        <label>Mobile Number</label>
                    </div>

                    {/* Password Field */}
                    <div className="inputBox">
                        <input 
                            type="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
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
