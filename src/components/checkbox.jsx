import {useReducer, useState} from 'react';

export function Checkbox() {
    const [checked, toggle] = useReducer(checked => !checked,false);
    return (
        <>
            <input type="checkbox"
                value={checked}
                onChange={toggle}
            ></input>
        </>
    );
}
