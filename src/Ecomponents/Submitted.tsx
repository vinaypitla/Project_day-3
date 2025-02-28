import React from "react";
import { useNavigate } from "react-router-dom";


const TestDriveConfirmation = () => {
    const navigate = useNavigate();

    return (
        <div>
           
            <div className="confirmation-container">
                <h2>Test Drive Request Submitted!</h2>
                <p>Thank you for requesting a test drive. Our team will contact you soon to schedule your appointment.</p>
                <button onClick={() => navigate("/")} className="btn btn-primary">
                    Return to Home
                </button>
            </div>
        </div>
    );
};

export default TestDriveConfirmation;
