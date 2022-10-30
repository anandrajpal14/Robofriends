import React from 'react'
import Hello from './hello.js'

const Cardlist = ({robots}) => {
    const cardArray = robots.map((user,i)=>{
        return <Hello key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return(
        <div>
            {cardArray}
        </div>
    )
}

export default Cardlist 