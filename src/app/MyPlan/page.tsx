'use client'
import { ExercisesContext } from '@/context/ExercisesContext';
import React, { useContext } from 'react';

const MyPlan = () => {
    const {planExercise , savedExercise} = useContext(ExercisesContext)
    return (
        <div className='container mx-auto px-2 py-6'>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Today’s Plan" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>
            </div>
        </div>
    );
};

export default MyPlan;