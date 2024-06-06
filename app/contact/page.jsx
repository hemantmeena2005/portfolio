"use client";

import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail,FiInstagram } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_lx7r0zr', 'template_azq8dpn', formData, 'XXnRefbKeUbVj5Y7P')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
      }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to send your message, please try again.');
      });

    setFormData({ name: '', email: '' });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Get in touch
              </h1>
              <p className="text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <FiMapPin className="w-8 h-8 text-gray-500" />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Delhi,India 
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <FiInstagram className="w-8 h-8 text-gray-500" />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  hemant._2005
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <FiMail className="w-8 h-8 text-gray-500" />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                <a href="mailto:imt_2022049@iiitm.ac.in">imt_2022049@iiitm.ac.in</a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
