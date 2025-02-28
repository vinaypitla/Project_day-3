import { useState } from "react";
import NavBar from "./NavBar";
import CarSlider from "../Ecomponents/CarSlider";
import { Link } from "react-router-dom";
import "../Css/MainPage.css"; 

export default function HomePage() {
    
    const vehicles = [
        { name: "Tesla Model S", type: "Electric", price: "₹6,990,900" },
        { name: "Ford Mustang", type: "Sports", price: "₹5,500,300" },
        { name: "Toyota Camry", type: "Sedan", price: "₹2,555,295" },
        { name: "BMW X5", type: "SUV", price: "₹10,000,000" },
        { name: "Audi A6", type: "Luxury", price: "₹5,577,900" }];

    return (
        <>
        <NavBar />
        <div>
            <div  style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
                <div className="video-text">
                <header style={{ textAlign: "center", marginBottom: "30px" }}>
                    <h1>Welcome to Our Showroom</h1>
                    <p>Find the perfect vehicle for you</p>
                    <CarSlider />
                </header>
                </div>

                <section className="vehicle-scroll-container">
                    <div className="vehicle-scroll">
                        {vehicles.concat(vehicles).map((vehicle, index) => (
                            <div key={index} className="vehicle-card">
                                
                                <h2>{vehicle.name}</h2>
                                <div className="scrolling">
                                <p>Type: {vehicle.type}</p>
                                <p>Price: {vehicle.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                
                
                
                <section style={{ textAlign: "center", marginTop: "20px" }}>
                <h2 ><Link to="Catalog" className="text-link">  Vehicle Categories </Link></h2>
                    <p>Browse by category: Sedans, SUVs, Electric Vehicles</p>
                </section>
                <section style={{ textAlign: "center", marginTop: "20px" }}>
                    <h2>Call-to-Action</h2>
                    <p>Ready to find your dream car? Explore now!</p>
                    <Link to="/Catalog">
                        <button style={{ marginRight: "10px", padding: "10px 20px", fontSize: "16px" }}>
                            Browse Cars
                        </button>
                    </Link>
                    <Link to="/TestDrive">
                        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
                            Request Test Drive
                        </button>
                    </Link>
                </section>
            </div>
           
        </div>
        </>
    );
}
