import Image from 'next/image';
import FooterLogo from "@/assets/footerLogo.png";

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between md:gap-0">
                <div className="flex gap-2 items-center">
                    <Image src={FooterLogo} className="w-9 h-9 md:w-12 md:h-12 object-contain" alt="Logo" />
                    <h2 className="[font-family:var(--font-oswald)] font-bold text-xl md:text-2xl text-center">FITLOG</h2>
                </div>
                <p className="[font-family:var(--font-inter)] text-xs md:text-base text-gray-500">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
};

export default Footer;