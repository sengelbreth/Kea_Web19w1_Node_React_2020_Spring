import React, { useState, useEffect } from 'react';

export default function BoredWidget() {
    const [activity, setActivity] = useState("hmmmm...");

    useEffect(() => {
        fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
            setActivity(data.activity)
        });

    }, []);
    
    return (
        <h1>Bored? You should ... {activity}</h1>
    );
}

