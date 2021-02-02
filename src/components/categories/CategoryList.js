import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "./CategoryDataProvider";
import { Link } from "react-router-dom"
import { CategoryForm} from "./CategoryForm"


export const CategoryList = (props) => {
   const {categories, getAllCategories, editCategory, deleteCategory} = useContext(CategoryContext)

   useEffect(() => {
       getAllCategories()
   }, [])

   const deleteCategoryButton = (event) => {
    const id = event.target.id;
    deleteCategory(categoryId);
  };

   return (
        <div className="categories">
        <h3 className="categories-title">Categories</h3>

        <article className="categoryList">
            {
                categories.map(category => {
                    return <Link key={category.id} to={`/categories/${category.id}`}>
                        <h3>{category.label}</h3>
                        <button type="submit"> Edit Category </button>
                        <button class="delete-category-button" onClick={deleteCategoryButton} id={category.id}>
                Delete Category{" "}
              </button>
                    </Link>
                })
            }
        </article>
        
    </div>
   )
}