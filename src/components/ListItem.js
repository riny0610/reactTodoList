import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdDeleteSweep,
} from 'react-icons/md';
import cn from 'classnames';
import './ListItem.scss';

const ListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } =todo;
    return (
        <div className='ListItme'>
            <div className={cn('checkbox', {checked})} onClick={()=> onToggle(id)}>
                {checked? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                <div className="text">{text}</div>
            </div>
            <div className='remove' onClick={()=> onRemove(id)}>
                <MdDeleteSweep/>
            </div>
        </div>
    );
}

export default ListItem;