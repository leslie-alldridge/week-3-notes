import React from 'react'

const Dog = props => {
  return (
    <div className='dog-wrapper'>
      <div className='dog'>
        <div className='dog-name-plate'>
          <span className='dog-name'>{props.name}</span>
          <span className='dog-breed'>{props.breed}</span>
        </div>
        <span className='dog-superpower'>{props.superpower}</span>
        <span className='dog-image'><img id="dogimg" src={props.image}/></span>
      </div>
    </div>
  )
}

export default Dog