import React from "react";
import { Tabs, Panel } from "../../components/Tabs";
import Product from "../../components/Product";
const ProductList = ({ products, category }) => {
  return (
    <div>
      <h5 className="mt-30 mb-20 ml-10">First News</h5>
      <div className="row">
        {products &&
          products.map((product) => (
            <div className="col-4 mb-20">
              <Product product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

const MenuList = ({ products }) => {
  let categories = [
    "Starters",
    "Burgers",
    "Chopped Salads",
    "Tacos",
    "Specialaties",
    "Sides",
    "Desserts",
    "Beverages",
    "CockTails",
    "Biryanis",
    "Breakfast",
    "Pizza",
    "Juice",
  ];
  return (
    <div className="menu-list">
      <Tabs currentTab={1}>
        {categories.map((category) => (
          <Panel title={category}>
            <ProductList products={products} category={category} />{" "}
          </Panel>
        ))}
      </Tabs>
    </div>
  );
};

export default MenuList;
