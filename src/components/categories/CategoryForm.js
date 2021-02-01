import React, { useRef, useContext, useEffect } from "react";
import {ContactContext} from "./ContactProvider"

export const CategoryForm = (props) => {
  const {addCategory} = useContext(CategoryContext)

  const newCategory = useRef(null);

  const createNewCategory = (e) => {
    e.preventDefault();
    addCategory({
      newCategory: newCategory.current.value
    })
      .then(() => props.history.push("/categories"))
  }
  return (
    <main style={{ textAlign: "center" }}>
      <form className="category--form" onSubmit={createNewCategory}>
        <h1 className="h3 mb-3 font-weight-normal">
          Please Add A New Category
        </h1>
        <fieldset>
          <label htmlFor="newCategory"> New Category </label>
          <input
            ref={newCategory}
            type="text"
            name="name"
            className="form-control"
            placeholder="newCategory"
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
