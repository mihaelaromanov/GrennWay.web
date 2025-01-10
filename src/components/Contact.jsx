import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Trimite formularul cu EmailJS
        emailjs
            .send(
                'your_service_id',   // Înlocuiește cu Service ID-ul tău
                'your_template_id',   // Înlocuiește cu Template ID-ul tău
                formData,             // Trimite datele formularului
                'your_user_id'        // Înlocuiește cu User ID-ul tău
            )
            .then(
                (response) => {
                    console.log('Success!', response.status, response.text);
                    alert('Mesaj trimis cu succes!');
                },
                (err) => {
                    console.error('Eroare:', err);
                    alert('Eroare la trimiterea mesajului.');
                }
            );
    };

    return (
        <div className='bg-green-50'>
        <div className="mb-24 border-2 border-green-500 bg-gray-200 p-6 max-w-3xl mx-auto rounded-lg shadow-lg">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Suntem aici pentru tine!</h1>
                <p className="text-gray-600">Contactează-ne pentru orice întrebări sau informații.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nume */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Nume</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Introdu numele tău"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Introdu adresa de email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                {/* Telefon */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Telefon</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Introdu numărul de telefon"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Mesaj */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Mesaj</label>
                    <textarea
                        name="message"
                        placeholder="Scrie mesajul tău aici"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition duration-300"
                >
                    Trimite
                </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 text-center text-gray-700">
                <p className="mb-2">
                    <strong className="text-gray-800">Adresa:</strong> Str. Verde nr. 10, București, România
                </p>
                <p className="mb-2">
                    <strong className="text-gray-800">Telefon:</strong> +40 123 456 789
                </p>
                <p>
                    <strong className="text-gray-800">Email:</strong> contact@greenwaylogistics.com
                </p>
            </div>
        </div>
        </div>
    );
};

export default Contact;
