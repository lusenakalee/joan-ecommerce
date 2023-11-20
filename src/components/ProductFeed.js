import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
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
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2">
      {products.slice(4, 5).map(({ id, items, name }) =>
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
      {products.slice(5, products.length).map(({ id, items, name }) =>
        items
          .slice(0, 4)
          .map(
            ({
              id: itemId,
              item_name,
              actual_selling_price,
              item_description,
              image1_path,
              image,
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
  );
};

export default ProductFeed;
