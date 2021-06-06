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
                            className="w3-check"
                        />
                    </td>
                    <td>
                        <label
                            htmlFor={data.id}
                            className={data.completed ? "mystrike w3-large" : "w3-large"}
                            title={data.description}
                        >
                            {data.title}
                        </label>
                    </td>
                    <td>
                        <button
                            type="button"
                            onClick={() => this.handleDelete(data.id)}
                            className="w3-button w3-red w3-round w3-hover-red"
                            style={{ width: "100%" }}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
        return (
            <main>
                <table
                className="w3-border w3-round w3-margin-bottom"
                 style={{ margin: "0 auto" }}
                >
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
                                    className="w3-input w3-border w3-round w3-center"
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
                                    className="w3-input w3-border w3-round w3-center w3-padding-24"
                                    style={{ resize: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                colSpan="2"
                                style={{ textAlign: "right" }}
                            >
                                Click the button to add
                        </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={this.handleAdd}
                                    className="w3-button w3-blue w3-round w3-hover-blue"
                                    style={{ width: "100%" }}
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