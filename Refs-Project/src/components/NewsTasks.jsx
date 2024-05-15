import React, { useState } from 'react'

function NewsTasks({ onAdd }) {

    const [enterTask, setEnterTask] = useState('');
    const handleChange = (event) => {
        setEnterTask(event.target.value);
    }

    const handleClick = () => {
        if (enterTask.trim() === '') {
            return;
        }
        onAdd(enterTask);
        setEnterTask('')
    }

    return (
        <div className='flex items-center gap-4' >
            <input type='text'
                className='w-64 pc-2 py-1 rounded-sm bg-stone-200'
                onChange={handleChange}
                value={enterTask} />
            <button className='text-stone-700 hover:text-stone-950'
                onClick={handleClick} > Add Task </button>
        </div>
    )
}

export default NewsTasks