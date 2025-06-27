import {  useState } from 'react';
import Cart from './components/Cart';
import { FiShoppingCart } from "react-icons/fi";
import ProductCard from './components/ProductCard';
import Swal from 'sweetalert2';
const App = () => {

  const [cart, setCart] = useState([]);

  const addProductToCart = (item) => {

    // Check if the item is already in the cart
    if (cart.includes(item)) {
      // alert("Item already in cart");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Item already in cart!"
      });
      return;
    }

    setCart(cart => cart.concat(item));
    Swal.fire({
      title: "Item added to cart!",
      icon: "success",
      draggable: true
    });

  }

  // useEffect(() => {
  //   console.log("Current cart contents:", cart);
  // }, [cart]);

  const toggleCartVisibility = () => {
    const cartElement = document.getElementById("cart");
    console.log(cartElement.classList.contains("hidden"));


    if (!cartElement) {
      console.error("Cart element not found");
      return;
    }

    if (cartElement.classList.contains("hidden")) {

      cartElement.classList.add("flex");
      cartElement.classList.remove("hidden");

    }
    else {
      cartElement.classList.add("hidden");
      cartElement.classList.remove("flex");
    }

  }


  return (
    <div className="bg-[#4300FF] min-h-screen">
      <div className='container mx-auto flex justify-between items-center p-4 bg-[#00CAFF] shadow-md'>
        <h1 className="text-3xl font-bold text-center my-8">Product List</h1>
        <button className='flex items-center gap-2 bg-[#00FFDE] py-1 px-2 rounded' onClick={toggleCartVisibility}>  <FiShoppingCart className=" size-5 btn-cart " /> {cart.length} </button>

      </div>

      <ProductCard addProductToCart={addProductToCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  )
}

export default App