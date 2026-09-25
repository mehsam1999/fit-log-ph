"use client";

import PlanStats from "@/components/MyPlan/PlanStats";
import PlanTab from "@/components/MyPlan/PlanTab";
import SavedTab from "@/components/MyPlan/SavedTab";
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExcercise } from "@/types/exercise";
import { useContext, useState } from "react";

const MyPlan = () => {
    const { planExercise, savedExercise } = useContext(ExercisesContext) as {
        planExercise: IExcercise[];
        savedExercise: IExcercise[];
    };
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    return (
        <div className="container mx-auto px-2 py-6">
            <div>
                <h1 className="[font-family:var(--font-oswald)] text-3xl font-bold text-white">MY PLAN</h1>
                <p className="mt-2 text-sm text-gray-500">Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <PlanStats planExercise={planExercise} savedExercise={savedExercise} activeTab={activeTab}></PlanStats>

            <div className="tabs tabs-box mt-6">
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Today’s Plan" defaultChecked onChange={() => setActiveTab("plan")} />
                <div className="tab-content bg-transparent border-0 p-0 pt-4">
                    <PlanTab exercises={planExercise} isPlan={true}></PlanTab>
                </div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" onChange={() => setActiveTab("saved")} />
                <div className="tab-content bg-transparent border-0 p-0 pt-4">
                    <SavedTab savedExercise={savedExercise}></SavedTab>
                </div>
            </div>
        </div>
    );
};

export default MyPlan;