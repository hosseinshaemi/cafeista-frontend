import React, { useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import BasketItem from '../../Components/BasketItem/BasketItem';
import './Basket.css';
import Backdrop from '../../Components/Backdrop/Backdrop';
import Payment from '../Payment/Payment';
import { Link } from 'react-router-dom';

const Basket = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [basketItems, setBasketItems] = useState([
    {
      id: 1,
      image: 'https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=robertav1_2_sidr',
      title: 'قهوه اسپرسو',
      price: '76,000'
    },
    {
      id: 2,
      image: 'https://img.freepik.com/premium-photo/cupcake-with-pink-frosting-lot-sprinkles-it_771335-47856.jpg?size=626&ext=jpg&ga=GA1.1.2124743745.1678829291&semt=sph',
      title: 'کاپ کیک',
      price: '35,000'
    },
    
  ]);

  const clearBasket = () => {
    setBasketItems([]);
  };

  const toggleBackdrop = () => {
    setShowBackdrop(!showBackdrop);
  };

  return (
    <div className='basket-container'>
      <div className='header-box'>
        <Link to="/main" >
        <IoArrowBack className='header-back-icon'/>
        </Link>
        
        <h1 className='header-text'>سبد خرید</h1>
       <div>
       <IoTrashOutline  className='header-trash-icon' onClick={clearBasket} />
       </div>

      </div>
      <div className='basket-items'>
        {basketItems.map((item) => (
          <BasketItem key={item.id} image={item.image} title={item.title} price={item.price} />
        ))}
        <div className='basket-description'>
                 <p>توضیحات</p>
                <textarea rows="3" cols="50" placeholder='توضیحات سفارشات خود را اینجا بنویسید'></textarea>
                <div className="basket-item-line" style={{marginTop:'150px'}}></div>
             </div>
             <div className='basket-detail' style={{marginTop:'20px'}}>
                 <p className='detailtitle'>جمع سفارش</p>
                  <p className='detailprice'>130.000</p>
                 <p className='detailtooman'>تومان</p>

                 <p className='detailtitle' style={{marginTop:'180px'}}>مالیات</p>
                 <p className='detailprice' style={{marginTop:'180px'}}>11.700</p>
                 <p className='detailtooman' style={{marginTop:'180px'}} >تومان</p>
                
                 <p className='detailtitle' style={{marginTop:'210px',color:'black'}}>مبلغ قابل پرداخت</p>
                 <p className='detailprice' style={{marginTop:'210px',color:'black'}} >141.700</p>
                <p className='detailtooman' style={{marginTop:'210px',color:'black'}}>تومان</p>
                 <div className="basket-item-line" style={{marginTop:'250px'}}></div>
             </div>
                 <div className='basket-footer'>
                     <p className='detailtitle' style={{marginTop:'260px' , color:'black'}}>جمع کل</p>
                     <p className='detailprice' style={{marginTop:'260px' , color:'black'}}>141.700</p>
                     <p className='detailtooman' style={{marginTop:'260px' , color:'black'}}>تومان</p>
                     <button onClick={toggleBackdrop} >ادامه</button>
                     <Backdrop showBackdrop={showBackdrop} onToggleBackdrop={toggleBackdrop}>
                         <Payment/>
                     </Backdrop>
                    
                    
                 </div>
             </div>
            
         </div>
     )
 }

export default Basket ; 

