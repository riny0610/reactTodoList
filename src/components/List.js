import React from 'react';
import ListItem from './ListItem';
import './List.scss';

const List = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="List">
            {todos.map(todo => (
                <ListItem 
                todo={todo} 
                key={todo.id} 
                onRemove={onRemove} 
                onToggle={onToggle}
                />
            ))}
        </div>

    );
}
export default List;