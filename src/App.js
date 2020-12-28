import "./app.css";
import React, { useState, useEffect } from 'react';
import Comment from './Comment';

const App = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/posts");
                let data = await response.json();
                setUserData(data);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);

    return (
        <div>
            <h1>User Comments</h1>
            {userData.map(({ id, title, body, userId }) => {
                    return <Comment key={id} title={title} body={body} userId={userId} />
                }
            )}
        </div>
    );
}

export default App;