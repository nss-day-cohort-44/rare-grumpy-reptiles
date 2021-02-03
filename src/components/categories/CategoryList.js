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
    const categoryId = event.target.id;
    if (window.confirm("Are you sure you want to delete?")){
        deleteCategory(categoryId);
        return props.history.push("/categories");

    }
    
  };

   return (
        <div className="categories">
        <h3 className="categories-title">Categories</h3>

        <article className="categoryList">
            {
                categories.map(category => {
                    return <div> <Link key={category.id} to={`/categories/${category.id}`}>
                        <h3>{category.label}</h3>
                        </Link>
                        <button type="submit"> Edit Category </button>
                        <button class="delete-category-button" onClick={deleteCategoryButton} id={category.id}>
                Delete Category{" "}
              </button>
            
                </div>})
            }
        </article>
        
    </div>
   )
}