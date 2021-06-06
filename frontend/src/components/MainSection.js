import React from 'react';

import Data from '../Data';
import DataHandler from './DataHandler';

function MainSection(){
    const datacomponent = Data.map((data) => {
        return(
            <DataHandler key={data.id} data={data}/>
        );
    });
    return(
        <main>
            {datacomponent}
        </main>
    );
}

export default MainSection;