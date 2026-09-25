"use client";

import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExcercise } from "@/types/exercise";

const Navbar = () => {
  const { planExercise, savedExercise } = useContext(ExercisesContext) as {
          planExercise: IExcercise[];
          savedExercise: IExcercise[];
      };
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-700">
      <div className="navbar shadow-sm py-5 px-2 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className="rounded-4xl">
                <Link href="/Workouts" className={`font-semibold rounded-4xl ${pathname.startsWith("/Workouts") ? "bg-[#1A2312] text-[#C2F800]" : "hover:bg-[#1A2312] hover:text-[#C2F800]"}`}>Workouts</Link>
              </li>
              <li className="rounded-4xl">
                <Link href="/MyPlan" className={`font-semibold rounded-4xl ${pathname === "/MyPlan" ? "bg-[#1A2312] text-[#C2F800]" : "hover:bg-[#1A2312] hover:text-[#C2F800]"}`}>My Plan</Link>
              </li>
            </ul>
          </div>

          <Link href="/">
            <div className="flex gap-2 items-center">
              <Image src={Logo} alt="Logo" />
              <h2 className="[font-family:var(--font-oswald)] font-bold text-2xl text-center">FITLOG</h2>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li className="rounded-4xl">
              <Link href="/Workouts" className={`font-semibold rounded-4xl ${pathname.startsWith("/Workouts") ? "bg-[#1A2312] text-[#C2F800]" : "hover:bg-[#1A2312] hover:text-[#C2F800]"}`}>Workouts</Link>
            </li>
            <li className="rounded-4xl">
              <Link href="/MyPlan" className={`font-semibold rounded-4xl ${pathname === "/MyPlan" ? "bg-[#1A2312] text-[#C2F800]" : "hover:bg-[#1A2312] hover:text-[#C2F800]"}`}>My Plan</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex gap-2">
          <Link href="/MyPlan" className="flex items-center gap-2 px-2 py-1">
            <span className="text-sm font-semibold text-gray-300 hover:text-white">Plan</span>
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#C2F800] px-2 text-sm font-bold text-black">{planExercise.length}</span>
          </Link>

          <Link href="/MyPlan" className="flex items-center gap-2 px-2 py-1">
            <span className="text-sm font-semibold text-gray-300 hover:text-white">Saved</span>
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-gray-700 px-2 text-sm font-semibold text-gray-300">{savedExercise.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;