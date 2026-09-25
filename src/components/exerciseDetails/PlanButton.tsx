'use client'
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExcercise } from "@/types/exercise";
import { type Dispatch, type SetStateAction, useContext } from "react";
import { GrFormSchedule } from "react-icons/gr";
import { toast } from "react-toastify";


const PlanButton = ({exercise}: {exercise: IExcercise}) => {
    const { planExercise, setPlanExercise } = useContext(ExercisesContext) as {
        planExercise: IExcercise[];
        setPlanExercise: Dispatch<SetStateAction<IExcercise[]>>;
    };
    const handlePlanButton = () =>{
        const alreadyAdded = planExercise.some(
            (item) => item.id === exercise.id
        );

        if (alreadyAdded) {
            toast.error(`"${exercise.name}" is already in today's plan`);
            return;
        }
        setPlanExercise([...planExercise, exercise])
        toast.success(`You have successfully added "${exercise.name}" to your plan`)
    }
    return (
        <div>
            <button className="btn flex items-center gap-2 border-0 bg-[#C2F800] px-6 text-black hover:bg-[#b8ed00]" onClick={()=> handlePlanButton()}><GrFormSchedule className="text-2xl" /> Add to today&apos;s plan</button>
        </div>
    );
};

export default PlanButton;