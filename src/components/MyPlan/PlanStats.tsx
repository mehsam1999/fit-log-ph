import { IExcercise } from "@/types/exercise";

interface IPlanStatsProps {
    planExercise: IExcercise[];
    savedExercise: IExcercise[];
    activeTab: "plan" | "saved";
}

const PlanStats = ({ planExercise, savedExercise, activeTab }: IPlanStatsProps) => {
    const exercises = activeTab === "plan" ? planExercise : savedExercise;

    const totalMinutes = exercises.reduce((total, exercise) => total + exercise.duration, 0);

    const totalCalories = exercises.reduce((total, exercise) => total + exercise.caloriesBurned, 0);

    return (
        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-xl border border-gray-800 bg-[#15171D] md:grid-cols-3">
            <div className="px-5 py-4 md:border-r md:border-gray-800">
                <p className="text-xs text-gray-500">Exercises</p>
                <p className="[font-family:var(--font-oswald)] mt-1 text-3xl font-bold text-[#C2F800]">{exercises.length}</p>
            </div>

            <div className="border-t border-gray-800 px-5 py-4 md:border-t-0 md:border-r md:border-gray-800">
                <p className="text-xs text-gray-500">Minutes</p>
                <p className="[font-family:var(--font-oswald)] mt-1 text-3xl font-bold text-white">{totalMinutes}</p>
            </div>

            <div className="border-t border-gray-800 px-5 py-4 md:border-t-0">
                <p className="text-xs text-gray-500">Calories</p>
                <p className="[font-family:var(--font-oswald)] mt-1 text-3xl font-bold text-white">{totalCalories}</p>
            </div>
        </div>
    );
};

export default PlanStats;