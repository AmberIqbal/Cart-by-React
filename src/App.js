import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from "react";
import AddItem from "./components/AddItem";
import { themeColors } from "./utils/constants";

function App() {
  const initialProductList = [
    {
      price: 80000,
      name: "Samsung",
      quantity: 0,
    },
    {
      price: 50000,
      name: "Readme Note",
      quantity: 0,
    },
  ];
  let [productsList, setProductsList] = useState(initialProductList);
  let [totalAmount, settotalAmount] = useState(0);
  const incrementQuantity = (index) => {
    let newProductList = [...productsList];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity++;
    newtotalAmount += newProductList[index].price;
    setProductsList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productsList];
    let newtotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    setProductsList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const resetQuantity = () => {
    let newProductList = [...productsList];
    newProductList.map((initialProductList) => {
      initialProductList.quantity = 0;
    });
    setProductsList(newProductList);
    settotalAmount(0);
  };
  const removeItem = (index) => {
    let newProductList = [...productsList];
    let newtotalAmount = totalAmount;
    newtotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductsList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const addItem = (name, price) => {
    let newProductList = [...productsList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductsList(newProductList);
  };

  return (
    <>
      <NavBar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productsList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
