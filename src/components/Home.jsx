import React from 'react';
import { Link } from "react-scroll";
import { PiPlant } from "react-icons/pi";

const Home = () => {
    return (
        <div className="bg-green-50 min-h-screen flex flex-col items-center justify-start lg:px-32 ">
           

            {/* Main content with background image */}
            <div className="relative w-screen bg-cover bg-center bg-no-repeat mt-14" style={{ backgroundImage: "url('https://i.pinimg.com/736x/af/08/a0/af08a0a0afbcf135f56d26273d28ee12.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Optional dark overlay */}
                
                <div className="relative z-10 flex flex-col lg:flex-row items-start justify-start h-[80vh] px-5 lg:px-32 text-white space-y-5">
                    {/* Left text section */}
                    <div className="w-full mt-36 text-center lg:text-left">
                        <h2 className="font-semibold text-5xl">
                            Transportăm viitorul,<br /> verde și eficient!
                        </h2>
                        <p className="text-xl">
                            GreenWay Logistics a fost fondată cu scopul de <br/> a revoluționa industria transporturilor, oferind soluții <br/> ecologice pentru un viitor mai bun. Cu o flotă modernă <br/> și un angajament ferm pentru sustenabilitate, livrăm mai <br/> mult decât bunuri - livrăm promisiuni și încredere.
                        </p>
                    </div>
                </div>
            </div>

            {/* Full-width green background section */}
            <div className="w-screen bg-green-500 ">
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block text-white py-4 px-6 text-center hover:bg-green-600 transition-colors">
                    <div className="cursor-pointer flex items-center justify-center gap-2">
                        <PiPlant className="text-xl" />
                        Contactează-ne pentru o ofertă personalizată!
                        <PiPlant className="text-xl" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
