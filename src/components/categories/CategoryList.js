import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "./CategoryDataProvider";
import { Link } from "react-router-dom"
import { CategoryForm} from "./CategoryForm"


export const CategoryList = (props) => {
   const {categories, getAllCategories} = useContext(CategoryContext)

   useEffect(() => {
       getAllCategories()
   }, [])

   return (
        <div className="categories">
        <h3 className="categories-title">Categories</h3>

        <article className="categoryList">
            {
                categories.map(category => {
                    return <Link key={category.id} to={`/categories/${category.id}`}>
                        <h3>{category.label}</h3>
                    </Link>
                })
            }
        </article>
    </div>
   )
}