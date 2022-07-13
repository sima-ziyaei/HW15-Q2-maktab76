import React, { Fragment, useState } from 'react';
import '../src/App.css';

const App = () => {
  const [data, setData] = useState([
    {
      country: 'Iran',
      capital: 'Tehran',
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/19/8c/47/0e/tehran-the-capital-of.jpg'

    },
    {
      country: 'Turkey',
      capital: 'Ankara',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/YDA-Center-03.jpg'
    },
    {
      country: 'USA',
      capital: '	Washington D.C.',
      img: 'https://www.thoughtco.com/thmb/JGE_xQpUmHb6oan75GMw0D4ensc=/2119x1415/filters:fill(auto,1)/GettyImages-497322993-598b2ad403f4020010ae0a08.jpg'
    },
    {
      country: 'France',
      capital: 'Paris',
      img: 'https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg'
    },
    {
      country: 'United Kingdom',
      capital: 'London',
      img: 'https://www.bayern.de/wp-content/uploads/2022/02/AdobeStock_132796360_1470x828_sq-1470x828.jpg'
    },
    {
      country: 'Sweden',
      capital: 'Stockholm',
      img: 'https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_1200,h_675/https://trinitytravel.gr/wp-content/uploads/2020/10/STOCKHOLM-1-1200x675.jpg'
    },
    {
      country: 'Spain',
      capital: 'Madrid',
      img: 'https://www.traveldailymedia.com/assets/2019/02/Madrid-Spain.jpg'
    },
    {
      country: 'Russia',
      capital: 'Moscow',
      img: 'https://www.japantimes.co.jp/wp-content/uploads/2022/03/np_file_148793.jpeg'
    },
    {
      country: 'Poland',
      capital: 'Warsaw',
      img: 'https://www.europechess.org/wp-content/uploads/2019/06/Warsaw_dusk_1500x1900.jpg'
    },
    {
      country: 'Italy',
      capital: 'Rome',
      img: 'https://www.wanderlustchloe.com/wp-content/uploads/2020/10/Colosseum-Rome.jpg'
    },
  ]);

  return (
    data.map(e => (

      <Fragment>
        <div className='wrapper'>
          <div className='cart'>
            <div>
              <img src={e.img} alt={e.country} className='image'></img>
            </div>
            <div className='text'>
              <p className='country'><span className='data'>Country:</span> {e.country}</p>
              <p className='capital'><span className='data'>Capital:</span>  {e.capital}</p>
            </div>
          </div>
        </div>
      </Fragment >
    ))
  )




};

export default App;
