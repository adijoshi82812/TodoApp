import React from 'react';

function DataHandler(props){
    return(
        <div>
            <input type="checkbox" id={props.data.id} checked={props.data.completed}/>
            <label htmlFor={props.data.id} className={props.data.completed ? "mystrike" : ""} title={props.data.description}>{props.data.title}</label>
        </div>
    );
}

export default DataHandler;