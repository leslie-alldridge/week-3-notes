import React from 'react'
import Dog from './Dog'

function DogsList(props) {
    return (
      props.dogs.length > 0 ? <ul>
        {props.dogs.map(oneDogs => ( 
            <div key={oneDogs.id}>
           <Dog  oneDogs name={oneDogs.name} breed={oneDogs.breed} superpower={oneDogs.superpower} image={oneDogs.image} />
           </div>
          )
        )}
      </ul> : "I have no Dogs"
    )
}
  
export default DogsList