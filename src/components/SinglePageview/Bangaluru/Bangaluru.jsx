import React from 'react';
import './Bangaluru.css';
import img4 from '../../../../public/wht2.jpeg';
import img5 from '../../../../public/wht4.jpeg';
import img1 from '../../../../public/wht1.jpeg';
import img55 from '../../../../public/wht5.jpeg';
import img66 from '../../../../public/wht6.jpeg';
const Bangaluru = () => {
  return (
    <div className='container'>
      <div>
        <h1 className='head mt-5'>Megakit. Bangalore</h1>
        <div className='ig'>
          <img src={img66} alt="Image 1" />
        </div>
      </div>
      <div>
      <div className='divide'>
      <div className='left-sec'>
        <h1>Explore Sobha Neopolis: The Newly Unveiled Upscale Residential Development in a Prime Location</h1>
        <p>SOBHA NEOPOLIS - Introducing a grand architectural masterpiece inspired by the timeless allure of Grecian aesthetics. Welcome to SOBHA Neopolis, where luxury residences harmonize with a wide array of contemporary amenities, designed to cater to residents of all ages. Nestled in the vicinity of Panathur, just off Marathahalli – ORR, this expansive Greek-inspired township promises a lifelong Mediterranean-style retreat. </p>
      </div>
      <div className='right-sec'>
        <h1 >Highlights</h1>
        <p className='highlit'>Total Plot Area : 25.89 Acres<br/> 

Total Units : 1875<br/> 

No. of Floors : 2 Basements + G + 18 Floors<br/> 

Club House :77850sft<br/> 

1BHK - 660sft<br/> 

3 BHK  - 1611sft - 1915sft<br/> 

3BHK+ Study - 2178sft<br/> 

4 BHK - 2333 - 2481sft</p>
      </div>
    </div>

        <h1 className='head mt-5'>Sobha Neopolis | Master Plan</h1>
        <div className='ig'>
          <img src={img5} alt="Image 2" />
          <img src={img1} alt="Image 2" />
          <img src={img5} alt="Image 2" />

        </div>
        <h1 className='head'>Sobha Neopolis- Location Map</h1>
        <div className='ig'>
          <img src={img1} alt="Image 2" />

        </div>

      </div>

      <div className='ig'>
        <h1 className='head'>Apartment1</h1>
        <img src={img4} alt="Image 3" />
      </div>
      <div className='ig'>
        <h1 className='head'>Apartment2</h1>
        <img src={img66} alt="Image 4" />
      </div>

      {/* Contact Form */}
      <div className='form-back'>
        <div className='contact-form'>
          <h2>Contact Us</h2>
          <form>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required />

            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />

            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' required></textarea>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bangaluru;
