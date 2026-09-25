import PlanButton from "@/components/exerciseDetails/PlanButton";
import SavedButton from "@/components/exerciseDetails/SavedButton";
import { IExcercise } from "@/types/exercise";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IExerciseDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getExercises = async (): Promise<IExcercise[]> => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
};

const ExerciseDetailsPage = async ({ params }: IExerciseDetailsPageProps) => {
    const { id } = await params;
    // console.log(id, "id")

    const exercisesData = await getExercises();
    const exercise = exercisesData.find(
        (exercise: IExcercise) => String(exercise.id) === String(id)
    ) as IExcercise;
    // console.log(exercise, "exercise")

    if (!exercise) {
        notFound();
    }

    return (
        <main className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-10">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                    <Image src={exercise.image} alt={exercise.name} fill className="object-cover object-center" />
                </div>

                <div className="flex flex-col">
                    <h1 className="[font-family:var(--font-oswald)] text-4xl font-extrabold uppercase leading-none text-white md:text-5xl">{exercise.name}</h1>

                    <p className="mt-3 text-sm leading-6 text-gray-400 md:text-base">{exercise.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {exercise.muscleGroups.map((muscle) => (
                            <span key={muscle} className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black">{muscle}</span>
                        ))}
                    </div>

                    <div className="mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#15171D]">
                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Equipment</span>
                            <span className="text-sm text-gray-300">{exercise.equipment}</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Difficulty</span>
                            <span className="text-sm text-gray-300">{exercise.difficulty}</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Sets</span>
                            <span className="text-sm text-gray-300">{exercise.sets}</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Reps</span>
                            <span className="text-sm text-gray-300">{exercise.reps}</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Duration</span>
                            <span className="text-sm text-gray-300">{exercise.duration} min</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Calories</span>
                            <span className="text-sm text-gray-300">{exercise.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">Rating</span>
                            <span className="text-sm text-gray-300">{exercise.rating}</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="[font-family:var(--font-oswald)] text-lg font-bold uppercase text-white">Instructions</h2>

                        <ol className="mt-3 flex flex-col gap-3">
                            {exercise.instructions.map((instruction, index) => (
                                <li key={index} className="flex gap-3 text-sm leading-5 text-gray-400">
                                    <span className="text-gray-500">{index + 1}.</span>
                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <PlanButton exercise={exercise}></PlanButton>
                        <SavedButton exercise={exercise}></SavedButton>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ExerciseDetailsPage;