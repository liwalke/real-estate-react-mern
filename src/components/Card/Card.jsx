import React from 'react'
import "./card.css"
import Slider from '../Slider/Slider';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function Card({ propertie }) {
    const { images, price, address, city, state, beds, baths, size, isFavorite } = propertie

    return (
        <div className='cardConteiner'>
            <div className='cardSlider'>
                <Slider images={images} />
            </div>
            <div className='cardInfoConteiner'>
                <div className="cardInfo">
                    <div>
                        <span className='mainInfo'>R$ {price}</span>
                    </div>
                    <p>{address}</p>
                    <span>{city} - {state}</span>
                </div>
                <hr />
                <div className='cardIcons'>
                    <div className='cardIcon'>
                        <KingBedIcon fontSize='smal' />
                        <p>{beds} beds</p>
                    </div>
                    <div className='cardIcon'>
                        <BathtubIcon fontSize='smal' />
                        <p>{baths} baths</p>
                    </div>
                    <div className='cardIcon'>
                        <SquareFootIcon fontSize='smal' />
                        <p>{size} sqm</p>
                    </div>
                </div>
            </div>
            <div className='cardFavoriteIcon'>
                {isFavorite ?
                    <FavoriteIcon fontSize='small' sx={{color: "red"}} /> :
                    <FavoriteBorderIcon fontSize='small' sx={{color: "gray"}}/>
                }
            </div>
            <div className="cardFeaturedIcon">
                <WorkspacePremiumIcon fontSize='small' sx={{color: "yellow"}}/>
            </div>
        </div>
    )
}

export default Card