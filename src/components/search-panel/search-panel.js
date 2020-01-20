import React from "react";

import './search-panel.css'
import ItemStatusFilter from "../item-status-filter";

const SearchPanel = ({onSearchInput}) => {

    const onSearchTermChange = (e) => {
        onSearchInput(e.target.value);
    };

    return (
        <div className='row'>
            <div className='col-sm-8'>
                <input type="text"
                       className="form-control search-input"
                       placeholder="Type to search"
                       onChange={ (e) => onSearchTermChange(e)}/>
            </div>
            <div className='col-sm-4'>
                <ItemStatusFilter/>

            </div>
        </div>
    );
};

export default SearchPanel;