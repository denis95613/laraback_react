import React from "react";
import { useSelector } from "react-redux";
import "./CategoriesByStore.css";

const CategoryStore = () => {
  const categoryStores = useSelector((state) => state.common.categoryStores);
  return (
    <div className="category_store">
      <h2 className="top_store pb-1 mb-4">Popular Store Categories</h2>
      <div className="category_store_list d-flex align-items-center justify-content-between mb-2">
        {categoryStores.map((one, key) => (
          <div className="category_store_itemList text-center" key={key}>
            <div className="category_store_item">
              <img src={one.categoryImg} alt="" className="category_Icon" />
            </div>
            <p className="pt-2 mb-0">{one.categoryTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryStore;
