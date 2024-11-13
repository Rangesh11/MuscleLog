import { useEffect, useState } from "react";
import WorkoutDetails from "../component/WorkoutDetails";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('http://localhost:4000/api/workout');
            const json = await response.json();
            if (response.ok) {
                setWorkouts(json);
            }
        };
        fetchWorkout();
    }, []);

    return (
        <div className="pages">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout.id} workout={workout} />
                ))}
            </div>
        </div>
    );
};

export default Home;
