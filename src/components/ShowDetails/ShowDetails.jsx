
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './showdetails.css'; 

const ShowDetails = () => {
  const { id } = useParams(); 

  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShowDetails(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    if (id) { 
      fetchShowDetails();
    }
  }, [id]);

  if (!showDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-details-container">
      <h1>{showDetails.name}</h1>
      <p>{showDetails.summary}</p>
    </div>
  );
};

export default ShowDetails;
