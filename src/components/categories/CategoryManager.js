import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "./CategoryDataProvider"
import {CategoryList} from "./CategoryList"
import {CategoryForm} from "./CategoryForm"

export const CategoryManager = (props) => {
    const {categories, getAllCategories, addCategory} = useContext(CategoryContext);
    return(
        <>
        <CategoryList/>
        <CategoryForm/>
        </>
    )
}