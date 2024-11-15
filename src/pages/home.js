
import { getProductList } from "../api/products.api";
import { El } from "../el/el";
import { router } from "../routes/router"; 
export const home = () => {

  const container = El({
    element: "div",
    className: "w-[428px] border border-black h-full overflow-y-hidden ",
    children: [
      El({
        element: "img",
        className: "w-[48px] h-[48px] my-[16px] ml-[24px]",
        src: "../src/images/homepageicon.png",
      }),
      El({
        element: "p",
        className: "ml-[-130px]  mt-[-70px]",
        children: ["good morning 👋"],
      }),
      El({
        element: "p",
        className: "ml-[-140px] font-bold",
        children: ["Saeed Abdilar"],
      }),
      El({
        element: "p",
        className: "mt-[-25px] ml-[80px] font-bold",
        children: [
          El({
            element: "img",
            className: "ml-[270px]",
            src: "../src/images/bell.svg",
          }),
        ],
      }),
      El({
        element: "p",
        className: "mt-[-25px] ml-[240px] font-bold",
        children: [
          El({
            element: "img",
            className: "ml-[140px] w-[24px] h-[24px]",
            src: "../src/images/heart.svg",
          }),
          El({
            element: "input",
            id: "password",
            className:
              "p-1 px-[70px] border border-black-300 rounded-md ml-[-230px] mt-7",
            type: "password",
            placeholder: "search",
          }),
        ],
      }),
      El({
        element: "div",
        className: "grid grid-cols-4 gap-2 mt-3 ml-[20px]",
        children: [
          El({
            element: "button",
            className: "",
            children:[El({
              element:"img",
              src: "../src/images/nike.png",
            })],
            onclick: () => {
              router.navigate("/page7");
              }
           
          }),
          El({
            element: "button",
            className: "",
            children:[El({
              element:"img",
              src: "../src/images/adidas.png",
            })], onclick: () => {
              router.navigate("/page7");
              }
           
          }),
          El({
            element: "button",
            className: "",
            children:[El({
              element:"img",
              src: "../src/images/converse.png",
            })], onclick: () => {
              router.navigate("/page7");
              }
           
          }),
          El({
            element: "button",
            className: "", children:[El({
              element:"img",
              src: "../src/images/asics.png",
            })], onclick: () => {
              router.navigate("/page7");
              }
        
          }),
          El({
            element: "button",
            className: "",children:[El({
              element:"img",
              src: "../src/images/newbalence.png",
            })], onclick: () => {
              router.navigate("/page7");
              }
            
          }),
          El({
            element: "button",
            className: "",children:[El({
              element:"img",
              src: "../src/images/rebook.png",
            })], onclick: () => {
              router.navigate("/page7");
              }
            
          }),
          El({
            element: "button",
            className: "",children:[El({
              element:"img",
              src: "../src/images/puma.png",
            })], onclick: () => {
              router.navigate("/page7");
              }
           
          }),
          El({
            element: "button",
            className: "",children:[El({
              element:"img",
              src: "../src/images/more.png",
            })], onclick: () => {
              router.navigate("/page7");
              }
            
          }),
        ],
      }),

      
      El({
        element: "div",
        className: "mt-8 ml-[-120px]",
        children: [
          El({
            element: "h2",
            className: "font-bold text-xl",
            children: ["Featured Products"],
          }),
          El({
            element: "div",
            className: "grid grid-cols-2 gap-4 mt-4", 
            children: [], 
          }),
        ],
      }),

      El({
        element: "div",
        className: "grid grid-cols-5 ",
        children: [
          El({
            element: "button",
            className: "",
            children: [
              El({
                element: "img",
                className: "]",
                src: "../src/images/home.png",
              }),
            ],
          }),
          El({
            element: "button",
            className: "",
            children: [
              El({
                element: "img",
                className: "",
                src: "../src/images/cart.png",
              }),
            ],
          }),
          El({
            element: "button",
            className: "",
            children: [
              El({
                element: "img",
                className: "",
                src: "../src/images/orders.png",
              }),
            ],
          }),
          El({
            element: "button",
            className: "",
            children: [
              El({
                element: "img",
                className: "",
                src: "../src/images/wallet.png",
              }),
            ],
          }),
          El({
            element: "button",
            className: "",
            children: [
              El({
                element: "img",
                className: "",
                src: "../src/images/profile.png",
              }),
            ],
          }),
        ],
      }),
    ],
  });


  getProductList().then(products => {
    const productGrid = container.querySelector(".grid-cols-2"); 

    products.forEach(product => {
      const productCard = El({
        element: "div",
        className: "border border-gray-300 rounded-lg ml-[110px]  ",
        children: [
          El({
            element: "h3",
            className: "font-bold text-lg",
            children: [product.title], 
          }),
          El({
            element: "p",
            className: "text-gray-600 mt-2",
            children: [product.price], 
          }),
          El({
            element:"div",
            className:"",
            children: [El({
              element:"img",
            src:product.images
            })]
          })
        ],
      });

      productGrid.appendChild(productCard);
    });
  }).catch(error => {
    console.error("Error fetching product list:", error);
  });

  return container;
};

export default home;
