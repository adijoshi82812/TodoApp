import React, { Component } from 'react';

import axios from 'axios';

class MainSection extends Component{
    constructor(){
        super();
        this.state = {
            Data: [],
        };
    }

    refreshList = () => {
        let data;

        axios.get('http://localhost:8000/api/todos/')
        .then((res) => {
            data = res.data;
            this.setState({ Data: data });
        })
        .catch((err) => {
            console.log(err);
        });
    };

    componentDidMount(){
        this.refreshList();
    }

    handleUpdate = (id, title, description, completed) => {
        const url = 'http://localhost:8000/api/todos/'+id+'/';
        const data = {
            title: title,
            description: description,
            completed: completed ? false : true,
        };

        axios.put(url, data)
        .then(() => {
            this.refreshList();
        })
        .catch((err) => {
            console.log(err);
        });
    };

    render(){
        const datacomponent = this.state.Data.map((data) => {
            return(
                <div 
                    key={data.id}
                >
                    <input
                        type="checkbox"
                        id={data.id}
                        checked={data.completed}
                        onChange={() => this.handleUpdate(data.id, data.title, data.description, data.completed)}
                    />
                    <label
                        htmlFor={data.id}
                        className={data.completed ? "mystrike" : ""}
                        title={data.description}
                    >
                        {data.title}
                    </label>
                </div>
            );
        });
        return(
            <main>
                {datacomponent}
            </main>
        );
    }
}

export default MainSection;