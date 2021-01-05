import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './Insert.scss';

const Insert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            e.preventDefault();
        },
        [onInsert, value],
    );
    
    return (
        <form className="Insert" onSubmit={onSubmit}>
            <input
            placeholder="할 일을 입력해주세요."
            value={value}
            onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );

}

export default Insert;