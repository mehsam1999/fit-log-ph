'use client'
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExcercise } from "@/types/exercise";
import { Dispatch, SetStateAction, useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";


const SavedButton = ({exercise}: {exercise: IExcercise}) => {
    const { savedExercise, setSavedExercise } = useContext(ExercisesContext) as {
        savedExercise: IExcercise[];
        setSavedExercise: Dispatch<SetStateAction<IExcercise[]>>;
    };
        const handleSavedButton = () =>{
            const alreadySaved = savedExercise.some(
            (item) => item.id === exercise.id
        );

        if (alreadySaved) {
            toast.error(`"${exercise.name}" is already saved`);
            return;
        }

            setSavedExercise([...savedExercise, exercise])
            toast.info(`You have successfully saved "${exercise.name}" for later`)
        }
    return (
        <div>
            <button className="btn flex items-center gap-2 border border-gray-700 bg-transparent px-6 text-gray-300 hover:bg-[#15171D]" onClick={()=> handleSavedButton()}><FiBookmark className="text-xl" /> Save for later</button>
        </div>
    );
};

export default SavedButton;