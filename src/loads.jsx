import React, { useState, useEffect } from 'react';


import SuggestionCard from './SuggestionCard';

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.bing.com/search?q=things+to+do+in+Minneapolis',
    {
    headers: {
        "Access-Control-Allow-Origin": "*", 
       }
    }
       )
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setSuggestions(data.map(item => (
          <SuggestionCard
            key={item.id}
            title={item.title}
            url={item.url}
            snippet={item.snippet}
          />
        )));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="suggestions-container">
      {suggestions}
    </div>
  );
};

export default Suggestions;
