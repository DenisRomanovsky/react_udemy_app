import React from "react";

import './search-panel.css'
import ItemStatusFilter from "../item-status-filter";

const SearchPanel = () => {
    return (
        <div className='row'>
            <div className='col-sm-8'>
                <input type="text"
                       className="form-control search-input"
                       placeholder="type to search"/>
            </div>
            <div className='col-sm-4'>
                <ItemStatusFilter/>

            </div>
        </div>
    );
};

export default SearchPanel;