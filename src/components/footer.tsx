import * as React from 'react';
import LogoSvg from '@/assets/svgs/logo.svg';
import FaceBook from '@/assets/svgs/facebook.svg';
import Instagram from '@/assets/svgs/instagram.svg';
import XSvg from '@/assets/svgs/x.svg';
import ThreadSvg from '@/assets/svgs/thread.svg';
import Link from 'next/link';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (<>
        <div className="w-full bg-gradient-to-r py-10 from-[#003581] to-[#1D6C63] text-[#D9D9D9]">
            <div className="container mx-auto px-4 py-12 flex flex-row max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:gap-10 justify-between items-start">
                <div className="flex flex-col gap-4 max-lg:w-full">
                    <h1 className="flex flex-row items-center font-lexend text-[#D9D9D9] gap-2">
                        <LogoSvg className="flex my-auto" size={18} />
                        <span className="flex text-3xl font-medium my-auto pt-2 font-lexend">Fixmobile</span>
                    </h1>
                    <p className="font-lexend font-light">Your trusted partner for mobile repairs. Honest. Fast. Guaranteed.</p>
                </div>
                <div className="flex flex-col gap-4 max-lg:w-full">
                    <h2 className="text-2xl font-lexend text-[#D9D9D9] font-semibold">Quick Links</h2>
                    <Link href="/" className="font-medium text-[#D9D9D9] hover:underline">Home</Link>
                    <Link href="/services" className="font-medium text-[#D9D9D9] hover:underline">Services</Link>
                    <Link href="/about" className="font-medium text-[#D9D9D9] hover:underline">About Us</Link>
                    <Link href="/contact" className="font-medium text-[#D9D9D9] hover:underline">Contact</Link>
                    <Link href="/book-repair" className="font-medium text-[#D9D9D9] hover:underline">Book a Repair</Link>
                </div>
                <div className="flex flex-col gap-4 max-lg:w-full">
                    <h2 className="text-2xl font-lexend text-[#D9D9D9] font-semibold">Contact Us</h2>
                    <p className="font-lexend text-[#D9D9D9] font-light">Suite C1 & C2, Tech Plaza, <br/>9 Saka Tinubu Street, <br/>Victoria Island, Lagos, Nigeria</p>
                    <p className="font-lexend text-[#D9D9D9] font-light">Email: info@fixmobileltd.com</p>
                    <p className="font-lexend text-[#D9D9D9] font-light">Phone: +234 913 611 5886</p>
                    <div className="flex gap-4 pt-4">
                        <Link href="#" className="font-medium text-[#D9D9D9] hover:underline"><FaceBook size={10} /></Link>
                        <Link href="#" className="font-medium text-[#D9D9D9] hover:underline"><XSvg size={10} /></Link>
                        <Link href="#" className="font-medium text-[#D9D9D9] hover:underline"><Instagram size={10} /></Link>
                        <Link href="#" className="font-medium text-[#D9D9D9] hover:underline"><ThreadSvg size={10} /></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full bg-[#0A2757] text-[#D9D9D9]">
            <div className="container mx-auto px-4 py-6">
                <p className="text-center text-sm font-lexend font-light">
                    &copy; {new Date().getFullYear()} Fix Mobile Limited. Honest. Fast. Guaranteed
                </p>
            </div>
        </div>
    </>
    );
};

export default Footer;
