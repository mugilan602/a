import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = ({ onLogout }) => {
    const navigate = useNavigate();

    // Function to handle logout
    const handleLogout = () => {
        onLogout(); // Call the parent function to perform logout actions
        navigate('/'); // Redirect to the home page after logout
    };

  

    return (
        <div>
            <h1>Welcome to your profile!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
