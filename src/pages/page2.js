import { El } from "../el/el";  
import { router } from "../routes/router"; 

export const page2 = () => {
  
    setTimeout(() => {
        router.navigate("/page3");
        console.log("settimeout");
        }, 3000);

  return El({
    element: "div",
    id: "welcome",
    className: "bg-red-800 h-screen w-[414px] flex flex-col justify-end overflow-y-hidden",
    children: [
   
      El({
        element: "img",
        id: "welcome-img",
        className: "object-cover",
        src: "../src/images/wallpaper1.png",
      }),

   
      El({
        element: "div",
        className: "absolute p-4 flex flex-col bottom-0 w-[414px] h-[300px]",
        children: [
          El({
            element: "p",
            className: "text-white text-[40px] mb-[16px]",
            children: ["welcome to 👋"],
          }),
          El({
            element: "p",
            className: "text-white font-semibold text-[72px] mb-[16px]",
            children: ["Shoea"],
          }),
          El({
            element: "p",
            className: "text-white font-semibold text-[16px] mb-[44px]",
            children: [
              "The best sneakers & shoes e-commerce app of the century for your fashion needs!",
            ],
          }),
        ],
      }),

 
    ],
  });
};

export default page2;
