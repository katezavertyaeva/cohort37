import { useState } from "react";

import Button from "../Button/Button";
import "./styles.css";
import { products } from "./data";

function ProductsList() {
  const [chosenProducts, setChosenProducts] = useState([]);

  const productsArray = products.map((product) => {
    return (
      <div key={product.id} className="list-entry">
        <p>{product.name}</p>
        <Button name="Add" onButtonClick={() => addProduct(product.id)} />
        <Button name="Remove" onButtonClick={() => {}} />
      </div>
    );
  });

  const addProduct = (id) => {
    let searchedEl = products.find((product) => {
      return product.id === id;
    });
    setChosenProducts(searchedEl);

    console.log(searchedEl);
    console.log(chosenProducts);
  };

  return (
    <div className="products-list-wrapper">
      <h4>Products List:</h4>
      <div className="products-list">{productsArray}</div>

      <h4>Selected Products:</h4>
      <div className="selected-products"></div>
    </div>
  );
}

export default ProductsList;
