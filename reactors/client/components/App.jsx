import React from 'react'
import ListDogs from './ListDogs'
import Subtitle from './Subtitle'

let dogs = [
  { id: '1', name: 'Desmona', breed: 'Bulldog', superpower: 'Heat vision', image: 'images/bulldog.png' },
  { id: '2', name: 'Dezzie', breed: 'Scottie', superpower: 'Heat clothing', image: 'images/scottie.png' },
  { id: '3', name: 'Leslie', breed: 'Bull-terrier', superpower: 'Flying', image: 'images/bull-terrier.png' },
  { id: '4', name: 'Nat', breed: 'Hound', superpower: 'Trips to Yans', image: 'images/hound.png' },
  { id: '5', name: 'Brosef', breed: 'Dachshund', superpower: 'One man punch', image: 'images/dachshund.png' },
  { id: '6', name: 'Big Dez', breed: 'Greyhound', superpower: 'Wine sculling', image: 'images/greyhound.png' }
]

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Subtitle text={'Canines using supercanine abilities for social good.'} />
    <ListDogs dogs={dogs}/>
  </div>
)

export default App
