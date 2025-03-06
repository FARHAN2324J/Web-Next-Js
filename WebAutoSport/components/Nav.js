"use client";
import "../styles/globals.css";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
          aboutSection.classList.add('highlight');
          setTimeout(() => {
            aboutSection.classList.remove('highlight');
          }, 3000); // Remove the highlight class after 1s
        }
      };

      const handleScrollPrice = () => {
        const aboutSection = document.getElementById('price');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
          aboutSection.classList.add('highlight');
          setTimeout(() => {
            aboutSection.classList.remove('highlight');
          }, 3000); // Remove the highlight class after 1s
        }
      };

      const handleScrollPERCENTAGE = () => {
        const aboutSection = document.getElementById('PERCENTAGE');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
          aboutSection.classList.add('highlight');
          setTimeout(() => {
            aboutSection.classList.remove('highlight');
          }, 3000); // Remove the highlight class after 1s
        }
      };

    return (
        <nav className="flex justify-between items-center p-5 fixed top-0 left-[50%] w-[90%] text-white Nav-trans">
            <div className="sm:text-3xl text-xl font-bold light">
                AUTO SPORT FARHAN
            </div>
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>
            <ul className={`lg:flex lg:gap-10 ${isOpen ? "block" : "hidden"} absolute lg:static rounded-2xl my-3 lg:bg-transparent  bg-[#8176AF] w-full lg:w-auto top-16 left-0 `}>
                <li className="p-2 hover:bg-[#343045] cursor-pointer transition rounded" onClick={handleScroll}>ABOUT</li>
                <li className="p-2 hover:bg-[#343045] cursor-pointer transition rounded" onClick={handleScrollPERCENTAGE}>PERCENTAGE</li>
                <li className="p-2 hover:bg-[#343045] cursor-pointer transition rounded" onClick={handleScrollPrice}>PRICE</li>
            </ul>
        </nav>
    );
}
