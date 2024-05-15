import React from 'react'
import NewsTasks from './NewsTasks'

function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className='text-2xl font-bold text-stone-700 mb-4' >  Tasks </h2>
            <NewsTasks onAdd={onAdd} />

            {tasks.length === 0 ? <p className='text-stone-800 my-4'>
                This preject does not have any tasks
            </p>
                :
                <ul className='p-4 mt-8 rounded-md bg-stone-100' >
                    {tasks.map((task) => (
                        <li key={task.id} className='flex justify-between my-4' >
                            <span>{task.text}</span>
                            <button
                                className='text-stone-700 hover:text-red-500'
                                onClick={() => { onDelete(task.id) }}
                            >
                                clear
                            </button>
                        </li>))}
                </ul>
            }

        </section>
    )
}

export default Tasks