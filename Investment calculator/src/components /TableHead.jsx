import React from 'react'

function TableHead({ headRow }) {
    return (
        <thead>
            <tr>
                {headRow.map((row, index) => {
                    return <th key={index}> {row} </th>
                })}
            </tr>
        </thead>
    )
}

export default TableHead