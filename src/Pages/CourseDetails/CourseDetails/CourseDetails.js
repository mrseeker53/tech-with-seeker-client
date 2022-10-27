import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Course/Course/Course';

const CourseDetails = () => {
    const courseDetails = useLoaderData();

    return (
        <div>
            <h2>Course Features</h2>
            {
                courseDetails.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
    );
};

export default CourseDetails;