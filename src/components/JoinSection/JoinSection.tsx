import React, { useState } from 'react';
import JoinCard from '../JoinCard/JoinCard';
import './JoinSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from '../MovieCard/MovieCard';

interface JoinSectionProps {
    
}

const JoinSection: React.FC<JoinSectionProps> = (props: JoinSectionProps) => {

    return(
        <div className='js-div-main'>
          <div className='container '>
            <div className='row d-flex'>
                <div className='col-md-3'>
                    <JoinCard  title='Enjoy on your TV'
                               description='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'/>
                </div>
                <div className='col-md-3'>
                    <JoinCard  title='Download your shows to watch offline'
                               description='Save your favorites easily and always have something to watch.'/>
                </div>
                <div className='col-md-3'>
                    <JoinCard  title='Watch everywhere'
                               description='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'/>
                </div>
                <div className='col-md-3'>
                    <JoinCard  title='Create profiles for kids'
                               description='Send kids on adventures with their favorite characters in a space made just for them — free with your membership.'/>
                </div>
            </div>
          </div>
        </div>
    )
  };
  
  export default JoinSection;
  