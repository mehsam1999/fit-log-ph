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
    const [sortBy, setSortBy] = useState<"duration" | "caloriesBurned" | "rating">("duration");

    const sortExercises = (exercise: IExcercise[]) => {
        const sortedExercises = [...exercise];

        if (sortBy === "duration") {
            sortedExercises.sort((a, b) => a.duration - b.duration);
        }

        if (sortBy === "caloriesBurned") {
            sortedExercises.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }

        if (sortBy === "rating") {
            sortedExercises.sort((a, b) => b.rating - a.rating);
        }

        return sortedExercises;
    };

    const sortedPlan = sortExercises(planExercise);
    const sortedSaved = sortExercises(savedExercise);

    return (
        <div className="container mx-auto px-2 py-6">
            <div>
                <h1 className="[font-family:var(--font-oswald)] text-3xl font-bold text-white">MY PLAN</h1>
                <p className="mt-2 text-sm text-gray-500">Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <PlanStats planExercise={planExercise} savedExercise={savedExercise} activeTab={activeTab}></PlanStats>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="inline-flex w-fit rounded-2xl border border-gray-700 bg-[#15171D] p-1">
                    <button className={`rounded-xl px-4 py-2 text-sm font-semibold ${activeTab === "plan" ? "bg-[#1A2312] text-[#C2F800]" : "text-gray-300 hover:text-white"}`} onClick={() => setActiveTab("plan")}>Today&apos;s Plan</button>
                    <button className={`rounded-xl px-4 py-2 text-sm font-semibold ${activeTab === "saved" ? "bg-[#1A2312] text-[#C2F800]" : "text-gray-300 hover:text-white"}`} onClick={() => setActiveTab("saved")}>Saved</button>
                </div>

                <div className="flex w-full items-center justify-between gap-3 sm:w-auto">
                    <span className="whitespace-nowrap text-lg text-gray-400">Sort By</span>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value as "duration" | "caloriesBurned" | "rating")} className="select h-10 w-full min-w-40 rounded-2xl border border-gray-700 bg-[#15171D] px-4 text-base text-white focus:border-gray-600 focus:outline-none sm:h-14 sm:w-56 sm:px-5 sm:text-lg">
                        <option value="duration">Duration</option>
                        <option value="caloriesBurned">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            <div className="pt-4">
                {activeTab === "plan" ? (
                    <PlanTab exercises={planExercise} isPlan={true} sortedPlan={sortedPlan}></PlanTab>
                ) : (
                    <SavedTab savedExercise={savedExercise} sortedSaved={sortedSaved}></SavedTab>
                )}
            </div>
        </div>
    );
};

export default MyPlan;