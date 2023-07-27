import React from 'react';

const SearchForm = ({ searchQuery, handleInputChange, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        className="form-container"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
