import React from 'react'

function Order() {
  return (
    <div className='relative border rounded-md'>
        <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
            <div>
                <p className='font-bold text-xs'>ORDERS PLACED </p>
                <p>DD MM YYY</p>
            </div>
            <div>
                <p className='text-xs font-bold'> TOTAL</p>
                <p>Ksh. 500 -- Next day delivery Ksh.100</p>
            </div>

            <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'> 4 items</p>

        </div>
    </div>
  )
}

export default Order
