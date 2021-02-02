import React, { useRef, useContext, useEffect } from "react";
import {CategoryContext} from "./CategoryDataProvider"

export const CategoryForm = (props) => {
  const {addCategory} = useContext(CategoryContext)

  const newCategory = useRef(null);

  const createNewCategory = (e) => {
    e.preventDefault();
    console.log(newCategory.current.value)
    addCategory({
      label: newCategory.current.value
    }).then(() => {
        newCategory.current.value = ""

    })
  }
  return (
    <main style={{ textAlign: "center" }}>
      <form className="category--form" onSubmit={createNewCategory}>
        <h3 className="h3 mb-3 font-weight-normal">
          New Category
        </h3>
        <fieldset>
          <label htmlFor="newCategory"> New Category </label>
          <input
            ref={newCategory}
            type="text"
            name="name"
            className="form-control"
            placeholder="New Category"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <button type="submit"> Add Category </button>
        </fieldset>
      </form>
    </main>
  );
};
