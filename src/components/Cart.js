import React from "react";
import { useCart } from "react-use-cart";

function Cart() {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    cartTotal,
    removeItem,
    updateItemQuantity,
  } = useCart();

  if (isEmpty) {
    return (
      <div className="container mt-5 text-center">
        <h1 className="mb-4">Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="row">
              <div className="col-12 col-md-2">
                <img
                  src={item.image}
                  alt={item.title}
                  width="100%"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-6">
                <h5>{item.title}</h5>
                <p>{item.specs}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md">
                <p className="price">Price: ₹{item.price}/-</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="col-12 col-md">
                <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateItemQuantity(item.id, e.target.value)}
                  className="form-control mt-2"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="total">Total Items: {totalUniqueItems}</p>
        <p className="total">Total Price: ₹ {cartTotal}/-</p>
      </div>

      {/* Payment Card */}
      <div className="card mt-4 p-4">
       
        <div className="card-body">
          {/* Payment details can be added here */}
        </div>
       
          <button className="btn btn-dark btn-lg">Proceed to Payment</button>
        </div>
      </div>
    
  );
}

export default Cart;
