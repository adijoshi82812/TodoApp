import React, { Component } from 'react';

import axios from 'axios';
import DataHandler from './DataHandler';

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

    render(){
        const datacomponent = this.state.Data.map((data) => {
            return(
                <DataHandler 
                    key={data.id} 
                    data={data}
                />
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