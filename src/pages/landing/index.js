import { useEffect } from "react"
import About from "../../components/about"
import Bio from "../../components/bio"
import WorkSection from "../../components/work-section"

function Landing ({setOnLanding}) {

  useEffect(() =>{
    setOnLanding(true)
  }, [])

    return(
        <>
      <Bio />
      <WorkSection />
      <About />
        </>
    )

}

export default Landing