import { useState } from "react";

const Hero = () => {
  const [favAuthor, setFavAuthor] = useState('')
  return (
    <div className='hero'>
      <h1 className='title'>Welcome to our book showcase!</h1>
      <p className='paragraph'>Dive into a world of words where imagination knows no bounds. From timeless classics to contemporary gems, we curate an eclectic collection to satisfy every literary palate. Explore, indulge, and embark on a journey of knowledge and adventure with our carefully selected titles. Happy reading!</p>
      <input type="text" placeholder="Enter Your Favourite Author" style={{
        width: "10%",
        height: "5%",
      }}
        onChange={(e) => setFavAuthor(e.target.value)}
      />
      <p className='paragraph-input'>
        {favAuthor !== '' ? favAuthor : 'Please Enter  Your Favourite Author'}
      </p>
    </div>
  )
}

export default Hero;