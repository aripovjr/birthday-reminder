import React from 'react'
import List from './birthay-reminder'
import { useState } from 'react'
import {data} from './data'

function App(){

    const [people, setPeople] = useState(data)

    return(
    <>
    <div className='container'>
    <h1>{people.length} birthdays today</h1>
        <List people={people}/>
    <button onClick={()=>setPeople([])}>Clear All</button>
    </div>    
    </>
)
}

export default App
