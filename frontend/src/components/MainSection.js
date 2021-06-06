import React, { Component } from 'react';

import Data from '../Data';
import DataHandler from './DataHandler';

class MainSection extends Component{
    render(){
        const datacomponent = Data.map((data) => {
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