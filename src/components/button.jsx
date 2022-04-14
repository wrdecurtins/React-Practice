import {useState} from 'react';

export function Thebutton(props){
    const [status, handler] = useState("Yes");
    return (
        <div>
            <h4>Answer: {status}</h4>
            <button onClick={() => handler("Yes")}>Yes</button>
            <button onClick={() => handler("No")}>No</button>
            <button onClick={() => handler("Maybe")}>Maybe</button>
        </div>
    );
};
