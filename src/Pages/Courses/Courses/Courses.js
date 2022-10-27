import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Courses = () => {
    const courses = useLoaderData();

    return (
        <div>
            <h2>Courses</h2>
            <div>
                
            </div>
        </div>
    );
};

export default Courses;