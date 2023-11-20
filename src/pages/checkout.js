import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';



const stripePromise = loadStripe(process.env.stripe_public_key);

function checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);


  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post('/api/create-checkout-session', 
    {
      items: items,
      email: session.user.email,
    });


  };



  return (
    <div className='bg-gray-100'>
        <Header/>
     <main className='lg:flex max-w-scren-2xl mx-auto'>
      {/* left */}
      <div className='flex-grow m-5 shadow-sm'>
        <Image
        src="/images/banner1.png"
        width={1028}
        height={250}
        objectFit='contain'
        />
        <div className='flex flex-col p-5 space-y-10 bg-white'>
          <h1 className='text-3xl border-b pb-4'>
            {items.length === 0 ? 'Your Elegant basket is Empty' : 'shopping Basket'}
          </h1>

          {items.map((item, i) => (
            <CheckoutProduct
            key={i}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            hasPrime={item.hasPrime}
            />
          ))}
        </div>

      </div>





         {/* right */}
         <div>
          {items.length > 0 && (
            <>
            <h2 className='whitespace-nowrap'>Subtotal( {items.length} items): {" "}
            <span className='font-bold'>
             Ksh.{total}
            </span>
            </h2>
            <button 
            role='link'
            onClick={createCheckoutSession}
            disabled={!session}
            className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed "}`}>
              {!session ? 'Sign in to checkout' : 'Proceed to Checkout'}
            </button>



            </>
          )}
        
        </div>

     </main>
    </div>
  )
}

export default checkout