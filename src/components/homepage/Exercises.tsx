import { IExcercise } from "@/types/exercise";
import ExerciseCard from "./ExerciseCard";

const getExercises = async ()=>{
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await response.json()
    return data
}
const Exercises = async() => {
    const exercisesData = await getExercises()
    // console.log(exercisesData, "exerciseData")
    return (
        <section>
            <div className='container mx-auto flex flex-col gap-3 py-6 px-2'>
                <h1 className="[font-family:var(--font-oswald)] text-center text-xl font-extrabold leading-[0.95] text-white md:text-left md:text-3xl lg:text-4xl">THE LIBRARY</h1>
                <p className="text-center text-sm leading-6 text-gray-500 md:text-left md:text-base lg:text-lg">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto py-6 px-2 ">
                {
                    exercisesData.map((exercise:IExcercise, index:number) => (
                    <ExerciseCard key={index} exercise={exercise}></ExerciseCard>
                ))
                }
            </div>
        </section>
    );
};

export default Exercises;