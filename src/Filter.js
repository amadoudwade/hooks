import React from "react";

const Filter = ({ setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setFilter((prev) => ({ ...prev, rating: e.target.value }));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Rechercher par titre"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Note minimale"
        min="0"
        max="10"
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
