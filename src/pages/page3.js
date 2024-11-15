// import { El } from "../el/el";
// import { router } from "../routes/router";
// export const page3= () => {
//     // setTimeout(() => {
//     //     router().navigate("/page3");
//     //   }, 1000); 
//       return El({
//         element: "div",
//         children: [
    
//           El({
//             element: "img",
//             className: "w-full h-full object-cover brightness-75 ",  
//             src:"../src/images/p3wall.png"
//           }),
         
//           El({
//             element: "header",
//             className: "absolute inset-0 mx-7 my-[600px]",  
//             children: [
//               El({
//                 element: "h1",
//                 className: "text-black text-3xl text-center font-medium pt-[30px]",  
//                 children: ["We provide high quality products just for you"],
//               }),El({
//                 element: "button",
//                 className: "mt-[140px] mx-3 px-[150px] py-[10px] bg-black text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300",
//                 children: ["Next"],
//                 onClick: () => {
//                 //   console.log("Button clicked!");
//                 router.navigate("/home")
//                 }
//               })
//             ],
//           }),
//         ],
//       });
//     }

// export default page3;
import { El } from "../el/el";
import { router } from "../routes/router";
export const page3 = () => {
return El({
element: "div",
id: "",
className:
"w-[415px] border border-black h-[700px] overflow-y-hidden flex flex-col items-center",
children: [
El({
element: "img",
id: "img",
className: "h-[500px] w-full object-cover",
       src:"../src/images/p3wall.png"
}),
El({
element: "div",
id: "text-swiper1",
className: "flex flex-col items-center justify-center px-4 ",
children: [
El({
element: "p",
id: "text-1",
className: "font-[500] text-[32px] text-center mt-[32px]",
children: ["We provide high quality products just for you"],
}),
El({
element: "img",
id: "text-1",
className: "",
src: "../src/images/swiper.png",
}),
El({
element: "button",
className: "w-full bg-black text-white rounded-full p-2 mt-1",
onclick: () => {
router.navigate("/page4");
},
children: ["Next"],
}),
],
}),
],
});
};
export default page3;

