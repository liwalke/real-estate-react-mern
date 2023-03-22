import React from 'react'
import { Nav, Overlay, Slide } from 'hero-slider'
import HeroSlider from 'hero-slider/dist/HeroSlider'
import sliderData from "../../util/sliderData"
import SearchBar from '../SearchBar/SearchBar'

function BasicSlider() {
    return (
        <HeroSlider
            accessability={{
                orientation: 'horizontal',
                shouldDisplayButtons: false,
            }}
            autoplay={{
                autoplayDuration: 10000,
            }}
            controller={{
                initialSlide: 1,
                slidingDuration: 1500,
                slidingDelay: 100
            }}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.33)"
            }}
            settings={{
                slidingAnimation: 250,
                autoplayDuration: 10000
            }}
            animations={{
                slidingAnimation: "fade",
            }}
        >
            <Overlay>
                <SearchBar/>
            </Overlay>
            <Slide
                label= {sliderData[0].alt}
                background={{
                    backgroundImageSrc: sliderData[0].src,
                    backgroundAttachment: "fixed"
                }}
            />
            <Slide
                label= {sliderData[1].alt}
                background={{
                    backgroundImageSrc: sliderData[1].src,
                    backgroundAttachment: "fixed"
                }}
            />
            <Slide
                label= {sliderData[2].alt}
                background={{
                    backgroundImageSrc: sliderData[2].src,
                    backgroundAttachment: "fixed"
                }}
            />
            <Nav/>
        </HeroSlider>
    )
}

export default BasicSlider