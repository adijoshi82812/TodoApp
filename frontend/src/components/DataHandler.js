import React, { Component } from 'react';

class DataHandler extends Component{
    render(){
        return(
            <div>
                <input 
                    type="checkbox" 
                    id={this.props.data.id} 
                    checked={this.props.data.completed}
                />
                <label 
                    htmlFor={this.props.data.id} 
                    className={this.props.data.completed ? "mystrike" : ""} 
                    title={this.props.data.description}
                >
                    {this.props.data.title}
                </label>
            </div>
        );
    }
}

export default DataHandler;