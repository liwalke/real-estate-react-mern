import React, { useState } from 'react'
import "./slider.css"
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Slider({ images }) {
    const [currImage, setCurrImage] = useState(0)
    const [showButtons, setShowButtons] = useState(false)

    function goNextSlide() {
        if (currImage < images.length - 1) {
            setCurrImage(currImage + 1);
        } else {
            setCurrImage(0)
        }
    }

    function goPrevSlide() {
        if (currImage > 0) {
            setCurrImage(currImage - 1)
        } else {
            setCurrImage(images.length - 1)
        }
    }

    return (
        <div className='ewb-slider'>
            {images.length === 0 ?

                <div className="ewb-noImages">
                    <ImageNotSupportedIcon fontSize='large' />
                </div>
                :
                <>
                    <div className='ewb-sliderImage' onMouseEnter={() => setShowButtons(true)} onMouseLeave={() => setShowButtons(false)}>
                        <img src={images[currImage].url} alt={images[currImage].alt} />
                    </div>
                    {showButtons &&
                        <div onMouseEnter={() => setShowButtons(true)} className="cardArrows">
                            <button onClick={() => goPrevSlide()}><ArrowBackIosNewIcon fontSize='small' sx={{ color: "gray" }} /></button>
                            <button onClick={() => goNextSlide()}><ArrowForwardIosIcon fontSize='small' sx={{ color: "gray" }} /></button>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Slider