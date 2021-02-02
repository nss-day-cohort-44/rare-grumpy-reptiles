import React, { useState } from "react"


export const CategoryContext = React.createContext();

export const CategoryDataProvider = (props) => {
  const [categories, setCategories] = useState([]);
  console.log("categories DP", categories)

  const getAllCategories = () => {
    return fetch("http://localhost:8088/categories")
      .then((res) => res.json())
      .then(setCategories);
  };

  const addCategory = (category) => {
    return fetch("http://localhost:8088/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then(getAllCategories);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        getAllCategories,
        addCategory
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};