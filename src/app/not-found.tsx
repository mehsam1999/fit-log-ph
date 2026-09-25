import Link from "next/link";

const NotFound = () => {
    return (
        <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
            <div className="text-center">
                <h1 className="[font-family:var(--font-oswald)] text-3xl font-bold text-white">WORKOUT NOT FOUND</h1>
                <Link href="/" className="btn mt-5 bg-[#C2F800] text-black">BACK TO Home</Link>
            </div>
        </div>
    );
};

export default NotFound;