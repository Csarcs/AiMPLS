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

  export default SuggestionCard;