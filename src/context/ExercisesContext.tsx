'use client'
import { createContext, ReactNode, useState } from "react";

export const ExercisesContext = createContext({})
const ExercisesProvider = ({children}: {children: ReactNode}) => {
    const [planExercise, setPlanExercise] = useState([])
    const [savedExercise, setSavedExercise] = useState([])

    const sharedData = {
        planExercise,
        setPlanExercise,
        savedExercise,
        setSavedExercise,
    }
    return (
        <ExercisesContext.Provider value={sharedData}>
            {children}
            
        </ExercisesContext.Provider>
    );
};

export default ExercisesProvider;