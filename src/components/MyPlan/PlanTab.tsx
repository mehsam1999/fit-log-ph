import { IExcercise } from "@/types/exercise";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiX } from "react-icons/fi";
import { FaFire, FaStar } from "react-icons/fa";

interface IPlanTabProps {
    exercises: IExcercise[];
    isPlan?: boolean;
    sortedPlan: IExcercise[];
}

const PlanTab = ({ exercises, isPlan = true, sortedPlan }: IPlanTabProps) => {
    if (exercises.length === 0) {
        return (
            <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed border-gray-800">
                <h2 className="[font-family:var(--font-oswald)] text-lg font-bold uppercase text-white">NOTHING HERE YET</h2>
                <p className="mt-1 text-xs text-gray-500">Browse the library and add a lift to get today moving.</p>
                <Link href="/Workouts" className="btn mt-4 rounded-full border-0 bg-[#C2F800] px-6 text-xs font-semibold text-black hover:bg-[#b8ed00]">Go to workouts</Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3">
            {sortedPlan.map((exercise) => (
                <div key={exercise.id} className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#15171D] p-3 md:flex-row md:items-center">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg md:h-24 md:w-30">
                        <Image src={exercise.image} alt={exercise.name} fill className="object-cover object-center" />
                    </div>

                    <div className="flex-1">
                        <h2 className="[font-family:var(--font-oswald)] text-base font-bold uppercase text-white">{exercise.name}</h2>
                        <p className="text-xs text-gray-500">{exercise.equipment}</p>

                        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1"><FiClock className="text-[#C2F800]" /> {exercise.duration} min</span>
                            <span className="flex items-center gap-1"><FaFire className="text-[#C2F800]" /> {exercise.caloriesBurned} kcal</span>
                            <span className="flex items-center gap-1"><FaStar className="text-[#C2F800]" /> {exercise.rating}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        <Link href={`/Workouts/${exercise.id}`} className="btn rounded-full border border-gray-700 bg-transparent px-5 text-xs text-gray-300 hover:bg-[#1A1D24]">View Details</Link>

                        {isPlan && (
                            <button className="btn rounded-full border-0 bg-[#C2F800] px-5 text-xs font-semibold text-black hover:bg-[#b8ed00]">✓ Mark as Done</button>
                        )}

                        <button className="btn btn-ghost btn-circle text-gray-500 hover:bg-transparent hover:text-white"><FiX /></button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlanTab;