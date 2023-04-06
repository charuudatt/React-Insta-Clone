import lens from './assets/lens.jpg'
import '../Landing_Page/LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {

    return (
        <div id='div'>
            <img src={lens} alt="Landing page" id='landing-img' />
            <div id='heading-div'>
                <h1 id='heading'>10X Team </h1>
            </div>
            <Link id='enter-parent' to="/PostView">
                <button id='enter'>Enter</button>
            </Link>
        </div>
    )
}

export default LandingPage