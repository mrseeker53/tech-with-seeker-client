import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Course/Course/Course';

const Courses = () => {
    // Set data with useLoaderData
    const allCourses = useLoaderData();

    return (
        <div>
            <h2>Courses: {allCourses.length}</h2>
            {
                // Loop through Courses & send data to Course
                allCourses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
    );
};

export default Courses;