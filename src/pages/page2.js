import { El } from "../el/el";
import { router } from "../routes/router";

const page2 = () => {
// setTimeout(() => {
// router.navigate("/welcome");
// // console.log("settimeout");
// }, 3000);
return El({
element: "div",
id: "starter",
className: " bg-red-300 w-[414PX] h-[500PX] flex flex-col justify-between items-center",
children: [
El({
element: "img",
id: "img-starter",
className: "mt-[200px]",
src: "./src/images/p5wall.png",
// onclick: () => {
// Router().navigate("/welcome");
// },
}),
El({
element: "img",
id: "img-starter",
className: "w-[48px] h-[48px] mb-[180px]",
// src: "./src/images/loading/1.gif",
}),
],
});
};

export default page2;