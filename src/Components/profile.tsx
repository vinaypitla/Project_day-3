import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "../Css/Profile.css"

interface TestDrive {
    carModel: string;
    date: string;
}

interface ProfileData {
    email: string;
    fullName: string;
    mobileNo: string;
    testDrives: TestDrive[];
}

export default function Profile() {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const email = localStorage.getItem("userEmail"); // Retrieve email separately

    useEffect(() => {
        if (!email) {
            setError("No email found. Redirecting to login...");
            setLoading(false);
            setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await axios.get<ProfileData>(
                    `http://localhost:8080/user/profile`, 
                    { params: { email } }
                );
                setProfile(response.data);
            } catch (error) {
                console.error("Error fetching profile:", error);
                setError("Failed to fetch profile data.");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [email, navigate]);

    if (loading) return <p>Loading profile...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
       <><NavBar /><div className="profile-container">
        <h2>Profile</h2>
        {profile ? (
          <div>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Full Name:</strong> {profile.fullName}</p>
            <p><strong>Mobile No:</strong> {profile.mobileNo}</p>

            <h3>Test Drive History</h3>
            {profile.testDrives.length > 0 ? (
              <ul>
                {profile.testDrives.map((testDrive, index) => (
                  <li key={index}>
                    <strong>Car:</strong> {testDrive.carModel} |
                    <strong>Date:</strong> {testDrive.date}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No test drives booked yet.</p>
            )}
          </div>
        ) : (
          <p>No profile data available.</p>
        )}
        <button onClick={() => {
          localStorage.removeItem("userEmail");
          navigate("/login");
        } }>Logout</button>
      </div></>
    );
}
