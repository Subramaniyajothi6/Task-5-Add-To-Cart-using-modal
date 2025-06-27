

const Cart = ({ cart, setCart }) => {


    const carttoggle = (e) => {
        // const cartElement = document.getElementById("cart-container");


        if (e.target.id === 'cart') {
            const cartElement = document.getElementById("cart");
            cartElement.classList.add("hidden");
            cartElement.classList.remove("flex");
        }
    }


    const removeItem = (item) => {
        const newCart = cart.filter(i => i.id !== item.id);
        setCart(newCart);
    }






    return (
        <>
            <div id="cart" className="fixed inset-0 bg-black/80 bg-opacity-10  items-center justify-center z-50 hidden flex-col p-4" onClick={carttoggle}>

                <div id="cart-container" className='bg-[#00CAFF] container mx-auto rounded-md  w-300 ' onClick={(e) => e.stopPropagation()}>



                    {cart.map((i) => {
                        console.log(i);

                        return (
                            

                                <div key={i.id} className="  flex items-center  justify-between p-3 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center  p-2 rounded-md shadow-md w-5/6 bg-[#00FFDE]">
                                        <img className="w-20 h-25 object-cover mr-4" src={i.image} alt={i.title} />
                                        <div>
                                            <h3 className="text-lg font-semibold">{i.title}</h3>
                                            <p className="text-gray-600">${i.price}</p>
                                        </div>
                                    </div>

                                    <button className=" bg-red-600 text-white px-2 py-1 rounded-md hover:text-red-700 button " onClick={() => removeItem(i)}>
                                        Remove
                                    </button>

                                </div>
                           

                        )
                    })}

                </div>
            </div>

        </>
    )
}


export default Cart 