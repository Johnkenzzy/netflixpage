import '../styles/download.css'
import mobile from '../assets/mobile.jpg'

function Download () {
    return (
        <div className='section section-section'>
            <div className='img-frame'>
                <img src={mobile} alt='mobile phone' />
            </div>
            <div className='section-text'>
                <h1>Download your shows to watch offline</h1>
                <div className='section-paragraph'>
                    <p>Save tour favorites easily and always have something to watch.</p>
                </div>
            </div>
        </div>
    );
}

export default Download;