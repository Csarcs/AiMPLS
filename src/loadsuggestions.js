import React, { useState, useEffect } from 'react';
import axios from 'axios';





const SuggestionCard = ({ title, url, snippet, data }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{snippet}</p>
      <p>{data}</p>
      <a href={url}>Learn more</a>
    </div>
  );
};


const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  


  useEffect(() => {
   
    setLoading(true);
   
  
    axios.get('https://www.bing.com/search?q=things+to+do+in+Minneapolis',
      {
        headers: {
        "Access-Control-Allow-Origin": "*", 
       }
      }
      ).then((response) => {
        
        const { location_results, travel_search_results } = response.data;

       
        const suggestions = [...location_results, ...travel_search_results].map(
          (item) => (
            <SuggestionCard
              key={item.url}
              title={item.title}
              url={item.url}
              snippet={item.snippets ? item.snippets[0] : ''}
              data={item.data ? JSON.stringify(item.data) : ''}
            />
          )
        );
        console.log();
      
        setSuggestions(suggestions);

       
        setLoading(false);
      })
      .catch((error) => {
       
        setError(error.message);

 
        setLoading(false);
      });
  }, []);


  return { suggestions, loading, error };
};


const Suggestions = () => {

  const { suggestions, loading, error } = useSuggestions();

  
  return (
    <div className="container">
      <h1>Things to do in Minneapolis</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="grid">{suggestions}</div>
      )}
    </div>
  );
};

export default Suggestions;