import React, { Component } from 'react';

import axios from 'axios';

class MainSection extends Component {
    constructor() {
        super();
        this.state = {
            Data: [],
            value: { title: "", description: "" },
        };

        this.handleKeyUp = this.handleKeyUp.bind(this);
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

    componentDidMount() {
        this.refreshList();
    }

    handleUpdate = (id, title, description, completed) => {
        const url = 'http://localhost:8000/api/todos/' + id + '/';
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

    handleDelete = (id) => {
        const url = 'http://localhost:8000/api/todos/' + id + '/';

        axios.delete(url)
            .then(() => {
                this.refreshList();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    handleKeyUp(event) {
        let value = this.state.value;
        value[event.target.name] = event.target.value;
        this.setState({ value: value });
    }

    handleAdd = () => {
        if (this.state.value.title.length < 4)
            return alert("Task must be 4 characters long");

        if (this.state.value.description.length < 10)
            return alert("Description must be 10 characters long");

        const data = {
            title: this.state.value.title,
            description: this.state.value.description,
        };

        axios.post('http://localhost:8000/api/todos/', data)
            .then(() => {
                this.refreshList();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        const datacomponent = this.state.Data.map((data) => {
            return (
                <tr
                    key={data.id}
                >
                    <td>
                        <input
                            type="checkbox"
                            id={data.id}
                            checked={data.completed}
                            onChange={() => this.handleUpdate(data.id, data.title, data.description, data.completed)}
                        />
                    </td>
                    <td>
                        <label
                            htmlFor={data.id}
                            className={data.completed ? "mystrike" : ""}
                            title={data.description}
                        >
                            {data.title}
                        </label>
                    </td>
                    <td>
                        <button
                            type="button"
                            onClick={() => this.handleDelete(data.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
        return (
            <main>
                <table>
                    <tbody>
                        {datacomponent}
                        <tr>
                            <td
                                colSpan="3"
                            >
                                <input
                                    type="text"
                                    placeholder="Enter new task here"
                                    name="title"
                                    onChange={this.handleKeyUp}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                colSpan="3"
                            >
                                <textarea
                                    placeholder="Enter description for the task"
                                    name="description"
                                    onChange={this.handleKeyUp}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                colSpan="2"
                            >
                                Click the button to add
                        </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={this.handleAdd}
                                >
                                    Add
                            </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        );
    }
}

export default MainSection;