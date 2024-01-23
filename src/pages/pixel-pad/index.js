import { useEffect } from "react"
import PixelPadIntro from "../../components/pixel-pad-intro"
import PixelPadGallery from "../../components/pixel-pad-gallery"

function PixelPad ({setOnLanding}) {

    useEffect(() =>{
        setOnLanding(false)
      }, [])

    return(
        <>
        <PixelPadIntro />
        <PixelPadGallery />
        </>
    )

}

export default PixelPad