import React from 'react';
import c from './../../../styles/Sheet.module.scss'
import Structure from './Structure';
import Table from './Table';
import ItemDetails from './ItemDetails';


const Sheet = () => {

    return <div className={c.wrap}>

            <Structure />

            <Table />

            <ItemDetails />
            
        </div>
    
};

export default Sheet;