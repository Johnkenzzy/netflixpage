import '../styles/home.css';
import home from '../assets/home.jpg';


function Home() {
  return (
    <div className="main-page" style={{backgroundImage: {home}}}>
      <header className="page-header">
        <div className="header-props">
          <div className='logo-frame'>
            <span id='logo'>NETFLIX</span>
          </div>
          <div className='sign-in'>
            <button id='signIn'>Sign In</button>
          </div>
        </div>
      </header>
      <div className='main-page-content'>
        <div className='main-page-text'>
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>Ready to watch? Enter your email to create or start your membership.</p>
        </div>
        <div className='email-to-start'>
          <input type='text' name='email'placeholder='Email address'/>
          <button className='get-started'>
            <span className='get-started-text'>
              Get Started
            </span>
            <span className='get-started-icon'>
              <i className="fa-solid fa-angle-up fa-rotate-90"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

