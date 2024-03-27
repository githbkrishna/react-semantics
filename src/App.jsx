import Page from "./Page"
import Semantics from "./semantics/Semantics"
import google from '../src/assets/google.png'
import linkdin from '../src/assets/linkedin.png'
import spotify from '../src/assets/spotify.png'
import twitter from '../src/assets/twitter.png'

function App() {

  const Image = [
    { url:google },
    { url:linkdin },
    { url:spotify },
    { url:twitter },
  ]

  return (
    <div>
      
      <Semantics/>

      <Page image={Image}/>

    </div>
  )
}

export default App
