"use client";
import * as React from 'react';
import LogoSvg from '@/assets/svgs/logo.svg';
import PhoneWhite from '@/assets/svgs/phone-white.svg';
import PhoneBookWhite from '@/assets/svgs/phone-book-white.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface IHeaderProps { }

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const navigate = useRouter();

    const phoneNumber = "+2349136115886";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Function to handle WhatsApp navigation
    const handleWhatsAppClick = () => {
        window.open(whatsappUrl, '_blank');
    };


    const Links = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "About Us", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <div className="w-full bg-gradient-to-r from-[#003581] to-[#1D6C63] text-white sticky top-0 left-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <h1 className="flex flex-row items-center font-lexend text-white gap-2">
                        <LogoSvg className="flex my-auto" size={18} />
                        <span className="flex text-2xl xl:text-3xl font-medium my-auto pt-2 font-lexend">Fixmobile</span>
                    </h1>

                    {/* Mobile menu button */}
                    <button
                        className="xl:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className='hidden xl:flex flex-row text-lg font-lexend font-light pt-2'>
                        {Links.map((link) => (
                            <Link key={link.name} href={link.link} className="mx-4 hover:text-gray-300">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className='hidden xl:flex flex-row gap-6'>
                        <button className="border-white border border-solid px-6 py-2 rounded-full font-lexend font-medium flex flex-row gap-3">
                            <PhoneWhite size={6} className="flex my-auto" />
                            <span className='flex text-normal'>+234 913 611 5886</span>
                        </button>
                        <button className="border-white border border-solid px-6 py-2 rounded-full font-lexend font-medium flex flex-row gap-3">
                            <PhoneBookWhite size={6} className="flex my-auto" />
                            <span className='flex text-normal'>Book a Repair</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`${isOpen ? 'block' : 'hidden'} xl:hidden mt-4`}>
                    <div className="flex flex-col space-y-4">
                        {Links.map((link) => (
                            <Link key={link.name} href={link.link} className="hover:text-gray-300">
                                {link.name}
                            </Link>
                        ))}
                        {/* want to navigate to whatsapp chat */}
                        <button onClick={() => handleWhatsAppClick()} className="border-white border border-solid px-4 py-2 rounded-full font-lexend font-medium flex flex-row gap-2 items-center justify-center mt-4">
                            <PhoneWhite size={6} className="flex" />
                            <span className='text-sm'>+234 913 611 5886</span>
                        </button>
                        <button onClick={() => navigate.push('/book-repair')} className="border-white border border-solid px-4 py-2 rounded-full font-lexend font-medium flex flex-row gap-2 items-center justify-center">
                            <PhoneBookWhite size={6} className="flex" />
                            <span className='text-sm'>Book a Repair</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;