import { useState } from "react"

import Button from "../Button/Button"
import "./styles.css"
import { products } from "./data"

function ProductsList() {
    const [chosenProducts, setChosenProducts] = useState([])

    const productsArray = products.map((product) => {
        return (
            <div key={product.id} className="list-entry">
                <p >{product.name}</p>
                <Button name="Add" onButtonClick={() => addProduct(product.id)} />
                <Button name="Remove" onButtonClick={() => removeProduct(product.id)} />
            </div>
        )
    }
    )
    console.log(chosenProducts);

    const addProduct = (id) => {

        let searchedEl = products.find((product) => {
            return product.id === id
        })
        setChosenProducts(prevProducts => [...prevProducts, searchedEl])

    }


    const removeProduct = (id) => {

        let filteredProducts = chosenProducts.filter((selectedItem) => selectedItem.id !== id);
   
        setChosenProducts(filteredProducts)
        console.log(filteredProducts)

}

const selectedItems = chosenProducts.map((product) => {
    return (
        <p key={product.id} className="list-entry">{product.name}</p>
    )
})

return (
    <div className="products-list-wrapper">

        <h4>Products List:</h4>
        <div className="products-list">{productsArray}</div>

        <h4>Selected Products:</h4>
        <div className="selected-products">{selectedItems}</div>

    </div>
)
}

export default ProductsList