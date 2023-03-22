import React, { useContext, useEffect } from 'react'
import "./home.css"
import BasicSlider from "../../components/HeroSlider/BasicSlider"
import Card from '../../components/Card/Card'
import { Context } from "../../data/Store/Store"
import Carousel from '../../components/Carousel/Carousel'

const featuredProperties = [
  {
    id: 1,
    images: [
      {
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Uma casa aleatória"
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Uma casa aleatória"
      },
      {
        url: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
        alt: "Uma casa aleatória"
      },
      {
        url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Uma casa aleatória"
      },
    ],
    price: 450000,
    address: "Rua Nome da Rua, 123",
    city: "Cidade",
    state: "RS",
    beds: 3,
    baths: 2,
    size: 150,
    isFavorite: true
  },
  {
    id: 2,
    images: [
      {
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Uma casa aleatória"
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Uma casa aleatória"
      }
    ],
    price: 385000,
    address: "Avenida Principal, 999",
    city: "Cidade",
    state: "RN",
    beds: 2,
    baths: 1,
    size: 80,
    isFavorite: false
  },
  {
    id: 3,
    images: [],
    price: 220000,
    address: "Rua 30 de Fevereiro, 3002",
    city: "Cidade",
    state: "MG",
    beds: 2,
    baths: 1,
    size: 60,
    isFavorite: false
  },
]

function Home() {
  const { setCurrPage } = useContext(Context)

  useEffect(_ => {
    setCurrPage("Home")

    return _ => setCurrPage("")
  }, [])

  return (
    <div className='home'>
      <div className="slider">
        <BasicSlider></BasicSlider>
      </div>

      <div className='featuredConteiner'>
        <h2>FEATURED PROPERTIES</h2>
        <Carousel>
          <Card propertie={featuredProperties[0]} />
          <Card propertie={featuredProperties[1]} />
          <Card propertie={featuredProperties[2]} />
        </Carousel>
      </div>
    </div>
  )
}

export default Home