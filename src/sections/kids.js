import '../styles/kids.css';
import kids from '../assets/kids.png';

function Kids () {
    return (
        <div className='section'>
            <div className='img-frame'>
                <img src={kids} alt='anime' />
            </div>
            <div className='section-text'>
                <h1>Create profile for kids</h1>
                <div className='section-paragraph'>
                    <p>Send kids on adventures with their favorite characters in a space made just for them-free with your membership</p>
                </div>
            </div>
        </div>
    );
}
export default Kids;