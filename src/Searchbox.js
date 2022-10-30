import React from 'react'

const Searchbox = ({SearchChange}) =>{
    return(
        <div className='pa2'>
            <input type='search' placeholder='Search Robots' className='tc b--green bg-light-blue' onChange={SearchChange}/>
        </div>
        
    )
}

export default Searchbox