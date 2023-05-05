// eslint-disable-next-line no-unused-vars
import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link }  from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css";

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={ Profile } alt='' className='home__img'  />


      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>Ghulam Gillani</span><br /> Web Developer
          </h1>

          <p className='home__description'>
          I am an energetic and ambitious software engineer
          with 2 years of experience in development. I have
          developed a mature and responsible approach to any
          task that I undertake. I am a team-oriented person
          who takes responsibility and is eager to deliver on time.
          </p>
          <Link to='/about' className='button'>
            More About Me {' '}
            <span className='button__icon'>
            <FaArrowRight />
            </span>
          </Link>
        </div>

      </div>

      <div className="color__block">
        
      </div>
    </section>
  );
}

export default Home