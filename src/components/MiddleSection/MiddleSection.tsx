import React from 'react';
import './MiddleSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface MiddleSectionProps {
    title?: string;
    subtitle?: string;
    image?: string;
    video?: string;
    textLeft?: boolean;
}

const MiddleSection: React.FC<MiddleSectionProps> = (props: MiddleSectionProps) => {
    return(
        <div className='ms-div'>
            <div className='container h-100'>
                <div className='row h-100 justify-content-center align-items-center vw-100'>
                    {!props.textLeft && (
                        <div className='col-md-5 col-video'>
                            {props.video!=='' && (
                                <div>
                                    <video src={props.video} className='ms-video' muted autoPlay loop  ></video>
                                    <img className='ms-img' src={props.image}></img>
                                </div>
                            )}
                            {props.video==='' && <img className='ms-img-only' src={props.image}></img>}
                        </div>
                    )}
                    <div className='col-md-4 col-text'>
                        <h2 className='ms-h2'>
                            {props.title}
                        </h2>
                        <p className='ms-p mt-3'>
                            {props.subtitle}
                        </p>
                    </div>
                    {props.textLeft && (
                        <div className='col-md-5 col-video'>
                            {props.video!=='' && (
                                <div>
                                    <video src={props.video} className='ms-video' muted autoPlay loop  ></video>
                                    <img className='ms-img' src={props.image}></img>
                                </div>
                            )}
                            {props.video==='' && <img className='ms-img-only' src={props.image}></img>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
  };
  
  export default MiddleSection;
  