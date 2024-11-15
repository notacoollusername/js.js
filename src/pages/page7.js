import { El } from "../el/el";  
import { findProductList } from "../api/findproducts.api";  

const page7 = () => {
 
  findProductList("nike")
    .then((productList) => {
      
      const container = El({
        element: "div",
        className: "w-[428px] border border-black h-full overflow-y-hidden mx-[600px]",  
        children: [] 
      });

      productList.forEach((product) => {
        
        const productElement = El({
          element: "div",
          className: "product",
          children: [
            El({
              element: "img",
              className: "product-image",
            src:product.images 
            }),
            El({
              element: "h3",
              className: "product-name",
              children: [product.title] 
            }),
            El({
              element: "p",
              className: "product-price",
              children: [`$${product.price}`] 
            })
          ]
        });

        
        container.appendChild(productElement);
      });

     
      document.body.appendChild(container);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};

export default page7;
