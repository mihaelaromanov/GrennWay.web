import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Secțiunea despre companie */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-xl font-bold mb-4">GreenWay Logistics</h2>
            <p>Transportăm viitorul, verde și eficient. Suntem lideri în transporturi sustenabile.</p>
          </div>

          {/* Link-uri utile */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-xl font-bold mb-4">Link-uri utile</h2>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">Despre noi</a></li>
              <li><a href="#services" className="hover:underline">Servicii</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#faq" className="hover:underline">Întrebări frecvente</a></li>
            </ul>
          </div>

          {/* Rețele sociale ca listă */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-xl font-bold mb-4">Urmărește-ne</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2024 GreenWay Logistics. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
