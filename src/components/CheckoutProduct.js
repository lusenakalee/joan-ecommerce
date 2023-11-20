import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from "react-redux"
import {addToBasket , removeFromBasket} from "../slices/basketSlice";

function CheckoutProduct({
    id,
    title,
    rating,
    price,
    description,
    category,
    image,
    hasPrime
}) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
           id,
           title,
           price,
           description,
           category,
           hasPrime,
           image,
        };
        dispatch(addToBasket(product))
  
     };

     
    const removeItemFromBasket = () => {
        const product = {
           id,
           title,
           price,
           description,
           category,
           hasPrime,
           image,
        };
        dispatch(removeFromBasket({id}))
  
     };

    return (
        <div className='grid grid-cols-5'>
            <img src={image} width={200} height={200} objectFit='contain' />

            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className='h-5 text-yellow-500' />
                    ))}
                </div>
                <p className='my-2 line-clamp-3 text-xs' >{description}</p>
                Ksh. {price}
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img
                            loading='lazy'
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=''
                        />
                        <p className='text-xs text-gray-500'>Free Next-day Delivery</p>

                    </div>
                )}

            </div>

            <div className='flex flex-col space-y-2 justify-self-end'>
                <button onClick={addItemToBasket} className='button'>Add To Basket</button>
                <button   onClick={removeItemFromBasket} className='button'>Remove from Basket</button>

            </div>

        </div>
    )
}

export default CheckoutProduct