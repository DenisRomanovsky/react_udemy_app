import React, {Component} from "react";
import './add-item.css'

export default class AddItem extends Component {
    render() {
        const {onAdd} = this.props;

        return (
            <div className='add-item d-flex'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <button className='btn btn-info'
                                onClick={() => onAdd({important: false, label: 'New Item'})}
                        >Add Item</button>
                    </div>
                </div>
            </div>
        );
    }
}