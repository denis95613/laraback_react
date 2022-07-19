import React from "react";
import { useSelector } from "react-redux";
import "./CategoriesByDeals.css";

const CategoryDeal = () => {
  const categoryDeals = useSelector((state) => state.common.categoryDeals);
  return (
    <div className="category_main">
      <h2 className="top_store pb-1 mb-4">Best Deals By Categories</h2>
      <div className="category_list d-flex align-items-center justify-content-between mb-3">
        {categoryDeals.map((index, key) => (
          <div className="category_list_item" key={key}>
            <img src={index.categoryBgImg} alt="" className="category_bgImg" />
            <div className="d-flex align-items-center position-relative z-index-6">
              <img src={index.categoryImg} alt="" className="category_Icon" />
              <p className="text-white mb-0 ms-2">{index.categoryTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDeal;
