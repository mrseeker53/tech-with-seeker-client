import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Course/Course/Course';


const CourseDetails = () => {
    // Set data from API
    const courseDetails = useLoaderData();

    return (
        <div>
            <button to='/checkout'>Get Premium Access</button>
            <h2 className='my-4'>Course Features</h2>
            {
                // Display course details
                courseDetails.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
    );
};

export default CourseDetails;