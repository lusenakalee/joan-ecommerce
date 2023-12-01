import React from 'react'

function ProductSingle({ item }) {
  return (
    <ProductDetails item={item} />
  )
}

export default ProductSingle


export async function getServerSideProps(context) {
    const products = await fetch("https://elegancetest.onrender.com/cat/{id}")
      .then(res => res.json())
  
      console.log("Fetched products:", products);
  
  
    return {
      props: {
        item
      }
    }
  }
  