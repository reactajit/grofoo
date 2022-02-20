import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Product from '../components/Product'
import TrendingFood from '../components/TrendingFood'

const Home = () => {
  return (
    <div>
      <Header/>
      <Product/>
      <TrendingFood/>
      <Footer/>
    </div>
  )
}

export default Home