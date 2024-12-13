'use client';
// components/Cart.js  
import { useState } from 'react';  

const Cart = () => {  
  const [items, setItems] = useState([  
    {  
      id: 1,  
      name: 'STUSSY WORLDWIDE LS TEE PIGMENT DYED BLACK TEE',  
      price: 3050000,  
      quantity: 1,  
      image: 'https://product.hstatic.net/200000475003/product/57_4afd32914613489dbcf1e5e9f581b47e_master.png', // Đường dẫn đến ảnh sản phẩm  
    },  
  ]);  

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);  

  const handleQuantityChange = (id, change) => {  
    setItems(items.map(item =>  
      item.id === id  
        ? { ...item, quantity: Math.max(item.quantity + change, 1) }  
        : item  
    ));  
  };  

  return (  
    <div className="max-w-6xl mx-auto p-6">  
      <h1 className="text-3xl font-bold mb-4">Giỏ hàng của bạn</h1>  
      <p className="mb-4 text-red-500">Bạn đang có {items.length} sản phẩm trong giỏ hàng</p>  

      <div className="bg-white shadow-md rounded-lg p-4 mb-6">  
        {items.map((item) => (  
          <div key={item.id} className="flex items-center justify-between border-b py-4">  
            <div className="flex items-center">  
              <button   
                className=" text-black  hover:text-red-500"   
                onClick={() => setItems(items.filter(i => i.id !== item.id))}>  
                <span className="material-icons">delete</span>  
              </button>  
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mx-4" />  
              <div>  
                <p className="font-semibold text-black">{item.name}</p>  
                <span className="text-lg text-gray-800">{item.price.toLocaleString()}₫</span>  
              </div>  
            </div>  
            <div className="flex items-center">  
              <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2 bg-gray-200 text-black rounded" disabled={item.quantity <= 1}>-</button>  
              <span className="mx-2 text-black">{item.quantity}</span>  
              <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2 bg-gray-200 text-black rounded">+</button>  
            </div>  
          </div>  
        ))}  
      </div>  

      <div className="bg-white shadow-md rounded-lg p-4">  
        <h2 className="text-2xl text-black font-bold mb-4">Thông tin đơn hàng</h2>  
        <p className="text-lg  text-black  mb-2 ">Tổng tiền: <span className="font-bold text-red-600">{total.toLocaleString()}₫</span></p>  
        <textarea className="w-full p-2 border rounded mb-4" rows="3" placeholder="Ghi chú đơn hàng"></textarea>  
        <label className="flex items-center mb-4  text-black">  
          <input type="checkbox" className="mr-2   " /> Xuất hóa đơn cho đơn hàng  
        </label>  
        <button className="w-full py-2  bg-red-500 text-white font-bold rounded hover:bg-red-600 transition duration-200">  
          THANH TOÁN  
        </button>  
      </div>  
    </div>  
  );  
};  

export default Cart;