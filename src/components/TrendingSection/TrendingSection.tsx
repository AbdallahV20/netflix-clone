import React, { useState } from 'react';
import './TrendingSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TrendingSectionProps {
    
}

const TrendingSection: React.FC<TrendingSectionProps> = (props: TrendingSectionProps) => {

    const [region, setRegion] = useState('Egypt');
    const handleRegionChange = () => {
        if(region === 'Egypt'){
            setRegion('Global');
        }
        else{
            setRegion('Egypt');
        }
    }

    return(
        <div className='ts-div-main'>
            <div className='container'>
                <h2 className='ts-h2-trending'>Trending Now</h2>
                <div className='ts-div-dropdown row  justify-content-start'>

                    <div className='col-md-2'>
                        <select name="dropdownRegion" id="dropdownId" className="ts-select" onChange={handleRegionChange}>
                        <option value="egypt">Egypt</option>
                        <option value="global">Global</option>
                        </select>
                    </div>

                    {region === 'Egypt' ? (
                        <div className='col-md-2'>
                            <select name="dropdownType" id="dropdownId" className="ts-select">
                            <option value="movies">Movies</option>
                            <option value="shows">TV Shows</option>
                            </select>
                        </div>
                    ) : (
                        <div className='col-md-3'>
                            <select name="dropdownType" id="dropdownId" className="ts-select">
                            <option value="movies-en">Movies - English</option>
                            <option value="movies-other">Movies - Other Languages</option>
                            <option value="shows-en">TV Shows - English</option>
                            <option value="shows-other">TV Shows - Other Languages</option>
                            </select>
                        </div>
                    )
                    }

                </div>
            </div>
        </div>
    )
  };
  
  export default TrendingSection;
  