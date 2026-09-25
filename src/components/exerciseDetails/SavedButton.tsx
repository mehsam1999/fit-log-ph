'use client'
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExcercise } from "@/types/exercise";
import { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";


const SavedButton = ({exercise}: {exercise: IExcercise}) => {
    const {savedExercise, setSavedExercise} = useContext(ExercisesContext)
        const handleSavedButton = () =>{
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