import React from 'react'
import { Container } from 'reactstrap'
import CarHeader from './CarHeader'
import Cars from './Cars'

const CarsSection = () => {
  return (
    <div style={{backgroundColor: '#fefefe'}}>
        <Container>
            <CarHeader/>
            <Cars/>
        </Container>
    </div>
  )
}

export default CarsSection