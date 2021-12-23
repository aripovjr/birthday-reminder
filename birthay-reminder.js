import React from 'react'
import {data} from './data'

function List({people}){
    return(
        <>{
            people.map(person=>{
            const {id, age, name, image} = person
           return(
                <div className='person-container'>
                    <img src={image}/>
                    <div className='info'>
                        <h2>{name}</h2>
                        <h3>{age} years</h3>
                    </div>
                </div>
           )
            })
        }
        </>
    )
}

export default List
