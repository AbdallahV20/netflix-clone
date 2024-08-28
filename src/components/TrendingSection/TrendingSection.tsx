import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './TrendingSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../mock-data/data.json';

interface TrendingSectionProps {
    
}

const TrendingSection: React.FC<TrendingSectionProps> = (props: TrendingSectionProps) => {

    const [region, setRegion] = useState('Egypt');
    const handleRegionChange = () => {
        console.log(data['movies']['global-en']);
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

                <div className='tc-div-cards-list'>
                    {data['movies']['global-en'].map( (movie, index) => (
                        <div key={index} className='ts-div-card'>
                            <MovieCard  
                                isRecentlyAdded={true}
                                isTopTen={true}
                                rankNumber={movie.rank.toString()}
                                posterUrl={movie.psoter}
                                description={movie.description}/>
                        </div>
                    ))}
                    {/* <MovieCard  isRecentlyAdded={true}
                                isTopTen={true}
                                rankNumber='1'
                                posterUrl='https://occ-0-4609-784.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABS7U4cBVGnZoOJf0CUi-PLEjM5857GiOD54r8IPtaAoZoqwUndNC7hroKt8WTa9s94nD2nvo0rPWO-5nEtXTTBPq5Jl1YCITButAxfeIbpFV2PSax8PUWfGXxveJ6kURngwZB2ddSnqi9pHn4irWcKANCdsk9dyc7U4Z2Qxr4Y8f_8sCClqWD1RtZIlgWOsnhj87wz12ho14KM8fXMqXLDi1AZBwGuejMv3s9ntytyouZ-zD37hjZ9edEgWZ0etoTefpAR2f2bpXPlqMmWxLognWPRpGrW5GVz7hl6G7_0yf6FouQbpsV_2Oqom5w7NysYIKEfCHh0Qi8rT1rr5a_0k.webp?r=3de'
                                description=''/> */}
                </div>
            </div>
        </div>
    )
  };
  
  export default TrendingSection;
  