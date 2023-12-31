import React from 'react'
import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"
import {
   MagnifyingGlassIcon,
   ShoppingCartIcon,
   Bars3Icon
} from "@heroicons/react/24/outline"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'


function Header () {
   const router = useRouter();
   const items = useSelector(selectItems);
   const { data: session } = useSession();


   return (
      <header>
         <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
               <Image
               onClick={() => router.push("/")}
                  src="/images/elegant-logo-full.png"
                  width={150}
                  height={40}
                  objectFit={"contain"}
                  className="cursor-pointer"
               />
            </div>
            <button className="bg-yellow-400 flex-grow h-10 rounded-md hidden sm:flex hover:bg-yellow-500 items-center">
               <input
                  type="text"
                  className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
               />
               <MagnifyingGlassIcon className="h-12 p-4 " />
            </button>
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
               <div onClick={ !session ? signIn : signOut } className="link">
                  <p>
                     {session ? `Hello ,${session.user.name}` :  "SignIn"}
                  </p>
                  <p className="font-extrabold md:text-sm">Account & Lists</p>
               </div>
               <div className="link">
                  <p>Returns</p>
                  <p className="font-extrabold md:text-sm">& Orders</p>
               </div>
               <div 
                onClick={() => router.push("/checkout")}
               className="relative link flex items-center">
                  <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
                     {items.length}
                     </span>
                  <ShoppingCartIcon className="h-10" />
                  <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
               </div>
            </div>
         </div>

         <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
            <p className="link flex items-center">
               <Bars3Icon className="h-6 mr-1" />All
            </p>
            <p className="link">Kitchen ware</p>
            <p className="link">Home decor</p>
            <p className="link">Today's Deals</p>
           
         </div>
      </header>
   )
}

export default Header