import { IExcercise } from "@/types/exercise";
import ExerciseCard from "./ExerciseCard";

const getExercises = async (): Promise<IExcercise[]> => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
};

const Exercises = async () => {
    const exercisesData = await getExercises();

    return (
        <section id="library" className="scroll-mt-6">
            <div className="container mx-auto flex flex-col gap-3 px-2 py-6">
                <h1 className="[font-family:var(--font-oswald)] text-center text-xl font-extrabold leading-[0.95] text-white md:text-left md:text-3xl lg:text-4xl">THE LIBRARY</h1>
                <p className="text-center text-sm leading-6 text-gray-500 md:text-left md:text-base lg:text-lg">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-4 px-2 py-6 md:grid-cols-2 lg:grid-cols-3">
                {
                exercisesData.map((exercise: IExcercise) => <ExerciseCard key={exercise.id} exercise={exercise} />)
                }
            </div>
        </section>
    );
};

export default Exercises;