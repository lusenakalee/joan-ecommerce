import React from 'react'

const ProductDetails = ({ item }) => {
    return (
        <div className="grid grid-flow-row--dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {products.slice(0, 4).map(({ id, items, name }) =>
          items
            .slice(0, 4)
            .map(
              ({
                id: itemId,
                item_name,
                actual_selling_price,
                item_description,
                image1_path,
               
              }) => (
                <Product
                  key={itemId}
                  id={itemId}
                  title={item_name}
                  price={actual_selling_price}
                  description={item_description}
                  category={name}
                  image={image1_path}
                />
              )
            )
        )}
        </div>
  )
}

export default ProductDetails