import React from 'react';
import { Link } from 'react-scroll';
import { PiPlant } from 'react-icons/pi';
import { FaLeaf, FaTruck, FaGlobeAmericas } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="bg-gradient-to-b from-green-100 to-green-50 py-24">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-6xl font-bold text-green-700 mb-12 flex items-center justify-center gap-4">
                    <PiPlant className="text-7xl" />
                    Ce oferim?
                    <PiPlant className="text-7xl" />
                </p>

                <div className="bg-white shadow-lg rounded-2xl p-12">
                    <p className="text-3xl font-semibold text-gray-700 mb-8">
                        Servicii noastre:
                    </p>
                    <ol className="space-y-8 text-left text-2xl">
                        <li className="flex items-center gap-6 text-green-600">
                            <FaTruck className="text-4xl" />
                            <span className="font-medium">
                                Transport rutier cu emisii reduse.
                            </span>
                        </li>
                        <li className="flex items-center gap-6 text-green-600">
                            <FaLeaf className="text-4xl" />
                            <span className="font-medium">
                                Consultanță logistică pentru soluții sustenabile.
                            </span>
                        </li>
                        <li className="flex items-center gap-6 text-green-600">
                            <FaGlobeAmericas className="text-4xl" />
                            <span className="font-medium">
                                Transport internațional.
                            </span>
                        </li>
                    </ol>
                </div>
            </div>

            {/* Secțiunea cu imagine de fundal după "Ce oferim?" */}
            <div 
                className="w-full bg-cover bg-center mt-32" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538438253612-287c9fc9217e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            >
                <div className=" relative z-10 flex flex-col items-center justify-center h-[60vh] px-5 lg:px-32 text-white space-y-5">
                    <h2 className="text-black font-semibold text-5xl text-center">
                        Transportăm viitorul,<br /> verde și eficient!
                    </h2>
                    <p className="text-black text-xl text-center">
                        GreenWay Logistics a fost fondată cu scopul de a revoluționa industria transporturilor, <br /> oferind soluții ecologice pentru un viitor mai bun. Cu o flotă modernă și un angajament <br /> ferm pentru sustenabilitate, livrăm mai mult decât bunuri - livrăm promisiuni și încredere.
                    </p>
                </div>
            </div>

            {/* Secțiunea verde cu link */}
            <div className="w-screen bg-green-500">
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block text-white py-4 px-6 text-center hover:bg-green-600 transition-colors">
                    <div className="cursor-pointer flex items-center justify-center gap-2">
                        <PiPlant className="text-xl" />
                        Vrei să afli mai multe despre serviciile noastre? Contactează-ne!
                        <PiPlant className="text-xl" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Services;
