import React from 'react';
import './Single.css'; // Import your CSS file for styling
import img4 from '../../../public/wht2.jpeg';
import img5 from '../../../public/wht4.jpeg';
import img6 from '../../../public/wht3.jpeg';

const Single = () => {
  return (
    <div>
      <div className='mt-5'>
        <h1>Megakit. Hyderabad</h1>
        <div className='ig'>
          <img src={img4} alt="Image 1" />
        </div>
        <h5 className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, illum iste! Adipisci neque eligendi saepe quam eveniet delectus a deserunt iste tempora, laudantium voluptas numquam, minima rerum hic cumque asperiores!</h5>
      </div>

      <div>
        <h1>Plan. Hyderabad Apartment no2</h1>
        <div className='ig'>
          <img src={img5} alt="Image 2" />
        </div>
        <h5 className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, illum iste! Adipisci neque eligendi saepe quam eveniet delectus a deserunt iste tempora, laudantium voluptas numquam, minima rerum hic cumque asperiores!</h5>
      </div>

      <div className='cardaprt'>
        <h5>Apartment1</h5>
        <img src={img6} alt="Image 3" />
      </div>
      <div className='cardaprt'>
        <h5>Apartment2</h5>
        <img src={img6} alt="Image 4" />
      </div>

      {/* Contact Form */}
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
  );
};

export default Single;
