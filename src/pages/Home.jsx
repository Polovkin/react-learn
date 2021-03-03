import React from 'react'
import {Form} from "../components/Fortm";
import {Notes} from "../components/Notes";

export const Home = () => {
    const notes = new Array(3)
            .fill('')
            .map((_,i)=>({id: i,title: `note ${i + 1}`}))
    return (
            <>
                <Form/>
                <hr/>
                <Notes notes={notes}/>
            </>
    )
}
