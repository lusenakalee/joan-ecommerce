import React from 'react'
import Header from '../components/Header'
import { useSession, signIn, signOut } from "next-auth/react"


function Orders() {
    const { data: session } = useSession();



  return (



    <>
    <div>
        <Header/>
    </div>
    <main className='mx-auto max-w-screen-lg p-10'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>
            Your orders

        </h1>

        {session ? (<h2> some orders</h2>) : (<h2>Please Sign in to view your orders</h2>)}

        <div className='mt-5 space-y-4'>
            

        </div>


    </main>
    </>




  )
}

export default Orders
