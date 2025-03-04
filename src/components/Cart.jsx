const Cart = ({ cart }) => {
    // ✅ Ensure cart is an array before using .length
    if (!cart || !Array.isArray(cart)) {
      return <p>Your cart is empty.</p>;
    }
  
    return (
      <div>
        <h2>Cart Items ({cart.length})</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Cart;
  