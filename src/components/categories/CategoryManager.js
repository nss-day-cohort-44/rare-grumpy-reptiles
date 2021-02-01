import { useContext } from "react"
import { CategoryContext } from "./CategoryDataProvider"
import {Categorylist} from "./CategoryList"
import React, { useContext, useEffect, useState } from "react";

export const CategoryManager = (props) => {
    const {categories, getAllCategories, addCategory} = useContext(CategoryContext);
}