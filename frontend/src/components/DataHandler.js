import React, { Component } from 'react';

class DataHandler extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            description: this.props.data.description,
            completed: this.props.data.completed,
        };
    }

    handleChange = () => {
        if(this.state.completed)
            this.setState({ completed: false });
        else
            this.setState({ completed: true });
    };

    render(){
        return(
            <div>
                <input 
                    type="checkbox" 
                    id={this.state.id} 
                    checked={this.state.completed}
                    onChange={this.handleChange}
                />
                <label 
                    htmlFor={this.state.id} 
                    className={this.state.completed ? "mystrike" : ""} 
                    title={this.state.description}
                >
                    {this.state.title}
                </label>
            </div>
        );
    }
}

export default DataHandler;