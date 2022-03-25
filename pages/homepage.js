import React from 'react'
import SearchBar from '../components/SearchBar'
import ReadMore from '../components/ReadMore'
import CarsSection from '../components/CarsSection'
import Footer from '../components/Footer'
import NavbarSection from '../components/NavbarSection'
import HeroSection from '../components/HeroSection'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const HomePage = () => {
  return (
    <div className={styles.custom}>
      <Head>
        <title>Auto Rentals</title>
      </Head>
        <NavbarSection/>
        <HeroSection/>
        <SearchBar/>
        <ReadMore/>
        <CarsSection/>
        <Footer/>
    </div>
  )
}

export default HomePage