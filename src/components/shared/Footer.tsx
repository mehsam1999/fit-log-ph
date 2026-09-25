import Image from 'next/image';
import FooterLogo from "@/assets/footerLogo.png";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="border-t border-gray-700">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-5 px-2 md:flex-row md:gap-0">
                <Link href='/'>
                    <div className="flex items-center gap-2">
                        <Image src={FooterLogo} className="h-9 w-9 object-contain md:h-12 md:w-12" alt="FITLOG Logo" />
                        <h2 className="[font-family:var(--font-oswald)] text-xl font-bold md:text-2xl">FITLOG</h2>
                    </div>
                </Link>
                <p className="text-center [font-family:var(--font-inter)] text-xs text-gray-500 md:text-right md:text-base">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
};

export default Footer;