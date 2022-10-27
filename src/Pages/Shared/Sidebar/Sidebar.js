import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    // Declare a state to set data from server
    const [courses, setCourses] = useState([]);

    // // Declare useEffect to load data for non route element
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <h5>Sidebar: {courses.length}</h5>
            <div>
                {
                    // loop through courses
                    courses.map(course =>
                        // set category-id to avoid warning
                        <p key={course.id}>
                            {/* Create link using courses-id */}
                            <Link to={`/course/${course.id}`}>{course.name}</Link>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default Sidebar;