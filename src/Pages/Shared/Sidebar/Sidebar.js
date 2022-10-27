import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Sidebar = () => {
    // Declare a state to set data from server
    const [courses, setCourses] = useState([]);

    // // Declare useEffect to load data for non route element
    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <h5>Sidebar</h5>
        </div>
    );
};

export default Sidebar;