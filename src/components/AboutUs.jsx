import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen flex flex-col items-center py-12 px-5 lg:px-20">
            <div className="max-w-7xl w-full text-center lg:text-left">
                {/* Titlu */}
                <h2 className="text-5xl lg:text-6xl font-extrabold text-green-700 mb-8 leading-snug">
                    Cine suntem?
                </h2>

                {/* Paragraf */}
                <p className="text-xl lg:text-2xl text-gray-900 mb-8 lg:w-[800px] w-full mx-auto lg:mx-0">
                    GreenWay Logistics a fost fondată cu scopul de a revoluționa industria transporturilor, 
                    oferind soluții ecologice pentru un viitor mai bun. Cu o flotă modernă și un angajament ferm 
                    pentru sustenabilitate, livrăm mai mult decât bunuri - livrăm promisiuni și încredere.
                </p>

                {/* Secțiune Valori */}
                <div className="space-y-8 lg:space-y-10">
                    <h3 className="text-3xl lg:text-4xl font-semibold text-green-700">
                        Valori:
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                        {/* Valoare 1 */}
                        <div className="group relative">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="https://www.profi.ro/wp-content/uploads/2023/07/ce-inseamna-sustenabilitate.jpg?x45257"
                                    alt="Sustenabilitate"
                                    className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-green-700 transition duration-300">
                                Sustenabilitate
                            </h4>
                        </div>
                        
                        {/* Valoare 2 */}
                        <div className="group relative">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="https://www.electrokits.ro/wp-content/uploads/2021/04/fiabilitate-tehnici-de-detectie-a-erorilor.jpg"
                                    alt="Fiabilitate"
                                    className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-green-700 transition duration-300">
                                Fiabilitate
                            </h4>
                        </div>

                        {/* Valoare 3 */}
                        <div className="group relative">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="https://www.salajulpursisimplu.ro/images/2021/01/tehnologia-pe-scurt.jpg"
                                    alt="Tehnologie de vârf"
                                    className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-green-700 transition duration-300">
                                Tehnologie de vârf
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
