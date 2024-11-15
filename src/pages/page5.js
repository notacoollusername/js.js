import { El } from "../el/el";
import { router } from "../routes/router";
export const page5 = () => {
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
       src:"../src/images/p5wall.png"
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
children: ["Your satisfaction is our number one periority"],
}),
El({
element: "img",
id: "text-1",
className: "",
src: "../src/images/swiper3.png",
}),
El({
element: "button",
className: "w-full bg-black text-white rounded-full p-2 mt-1",
onclick: () => {
router.navigate("/page6");
},
children: ["Next"],
}),
],
}),
],
});
};
export default page5;