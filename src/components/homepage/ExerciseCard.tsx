import Image from "next/image";
import { IExcercise } from "@/types/exercise";
import { FaFire, FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

interface IExerciseCardProps {
    exercise: IExcercise;
}

const ExerciseCard = ({ exercise }: IExerciseCardProps) => {
    return (
        <div className="border border-gray-800 bg-[#15171D] overflow-hidden rounded-xl">
            <Image src={exercise.image} alt={exercise.name} width={400} height={400} className="h-[400] w-full object-cover" />
            <div className="p-4">
                <div className="mb-3 flex flex-wrap gap-2">
                    {exercise.muscleGroups.map((muscle) => 
                        <span key={muscle} className="rounded-full bg-[#C2F800] px-2 py-1 text-[10px] font-bold uppercase text-black">{muscle}</span>
                    )}
                </div>
                <h2 className="[font-family:var(--font-oswald)] text-lg font-bold uppercase text-white">{exercise.name}</h2>
                <p className="mt-1 text-gray-500">{exercise.equipment}</p>
                <div className="mt-3 flex items-center gap-4 border-t border-gray-800 pt-3 text-gray-500">
                    <div className="flex items-center gap-4 border-gray-800 pt-3 text-gray-500">
                        <span className="flex items-center gap-1"><FiClock /> {exercise.duration} min</span>
                        <span className="flex items-center gap-1"><FaFire /> {exercise.caloriesBurned} kcal</span>
                        <span className="flex items-center gap-1"><FaStar /> {exercise.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseCard;