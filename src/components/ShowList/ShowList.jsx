// src/components/ShowList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { RiMovieFill } from "react-icons/ri";
import './showlist.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('Error fetching shows:', error);
      });
  }, []);

  const demoImageUrl = 'https://placehold.co/210x295?text=Image+Not+Available'; 

  return (
    <div className="homeapp">
        <h1>QuadB <RiMovieFill className='adicons' size={18} color='red'/> </h1>
        <h3>Discover, Rate, and Explore the World of Cinema with Us!</h3>
        <div className="show-container">
       
       {shows.map(({ show }) => (
         <div key={show.id} className="show-card">
           {show.image ? (
             <img src={show.image.medium} alt={show.name} />
           ) : (
             <img src={demoImageUrl} alt="Demo" />
           )}
           <div className="show-details">
             <h2>{show.name}</h2>
             <p>
               Rating: <FaStar size={15} color="yellow" /> {show.rating.average}
             </p>
             <p>Genres: {show.genres.join(', ')}</p>
             <p>Language: {show.language}</p>
             {/* <p>{show.summary}</p> */}
             <Link to={`/show/${show.id}`}>
               <button className="btn">Details</button>
             </Link>
           </div>
         </div>
       ))}
     </div>
    </div>
  );
};

export default ShowList;
