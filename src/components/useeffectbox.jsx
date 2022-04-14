import {useState, useEffect} from 'react';

export function EffectBox({num}) {
    const [text, changeText] = useState("");
    const [edits, changeEdits] = useState(-1);

    useEffect(() => {
        changeEdits(edits + 1);
    }, [text]);

    return (
        <div key={num}>
            <h3>Field: {num}, Edits: {edits}</h3>
            <input type="text" value={text}
                onChange={e=>changeText(e.target.value)}
            ></input>
        </div>
    );
}

export function manyEffectboxes(num){
    let effboxes = [];
    for(let i=0; i< num; i++){
        effboxes.push((<EffectBox num={i}/>));
    }
    return effboxes;
}
