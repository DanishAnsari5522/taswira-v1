import React from 'react'
import '../css/Filter.css'
function Filter() {
    return (
        <>
            <div className='inputandselect'>
                <input type="text" name="name" placeholder='Search item....' className='input'/>
                <select className='selectd'>
                    <option value="grapefruit" selected disabled>Filter</option>
                    <option value="Organza">Organza</option>
                    <option value="Printed">Printed</option>
                    <option value="Double layered Hair bows">Double layered Hair bows</option>
                    <option value="Wristlets">Wristlets</option>
                </select>
            </div>
        </>
    )
}

export default Filter