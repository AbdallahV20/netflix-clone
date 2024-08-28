import React, { useState } from 'react';
import './JoinCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface JoinCardProps {
  title: string;
  description: string;
}

const JoinCard: React.FC<JoinCardProps> = (props: JoinCardProps) => {

    return(
        <div className='jc-div-main'>
            <h3 className='jc-h3-title'>
                {props.title}
            </h3>
            <p className='jc-p-description'>
                {props.description}
            </p>
        </div>
    )
  };
  
  export default JoinCard;
  