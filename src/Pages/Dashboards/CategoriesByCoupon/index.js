import React from "react";
import { useSelector } from "react-redux";
import "./CategoriesByCoupon.css";

const CategoryCoupon = () => {
  const categoryCoupons = useSelector((state) => state.common.categoryCoupons);
  return (
    <div className="category_store">
      <h2 className="top_store pb-1 mb-4">Handpicked Coupon Categories</h2>
      <div className="category_store_list d-flex align-items-center justify-content-between mb-3">
        {categoryCoupons.map((one, key) => (
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

export default CategoryCoupon;
