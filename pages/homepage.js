import React from 'react'
import ContactBar from '../components/ContactBar'
import NavBar from '../components/NavBar'
import ImageCover from '../components/ImageCover'
import SearchBar from '../components/SearchBar'
import ReadMore from '../components/ReadMore'
import CarsSection from '../components/CarsSection'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <div>
        <ContactBar/>
        <NavBar/>
        <ImageCover/>
        <SearchBar/>
        <ReadMore/>
        <CarsSection/>
        <Footer/>
    </div>
  )
}

export default HomePage