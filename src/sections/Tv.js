import '../styles/Tv.css';
import tv from '../assets/tv.png'

function Tv() {
    return (
        <div className='section tv-section'>
            <div className='section-text'>
                <h1>Enjoy on your TV</h1>
                <div className='section-paragraph'>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blur-ray players, and more.</p>  
                </div>
            </div>
            <div className='img-frame'>
            <img src={tv} alt='motion tv'/>
            </div>
        </div>
    )
}

export default Tv;