import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold mb-2">Connect with me:</h2>
                    <div className="flex space-x-4">
                        <a href="https://github.com/mule2020" target="_blank" rel="noopener noreferrer"><FaGithub className="text-white hover:text-gray-500" size={24} /></a>
                        <a href="https://linkedin.com/in/mulle-g" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-white hover:text-gray-500" size={24} /></a>
                        <a href="https://t.me/+14378587938" target="_blank" rel="noopener noreferrer"><FaTelegram className="text-white hover:text-gray-500" size={24} /></a>
                        <a href="https://w.me/+14378587938" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-white hover:text-gray-500" size={24} /></a>
                        <a href="mailto:codewithmulee@gmail.com" target="_blank" rel="noopener noreferrer"><HiOutlineMail className="text-white hover:text-gray-500" size={24} /></a>
                    </div>
                </div>
                <p className="text-gray-500 text-center md:text-right">© {new Date().getFullYear()} Muluken Gashaw.</p>
            </div>
        </footer>
    );
}

export default Footer;
