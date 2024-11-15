import { El } from "../el/el";
import { router } from "../routes/router";

const header = () => {
setTimeout(() => {
router.navigate("/page2");
console.log("settimeout");
}, 3000);
return El({
element: "div",
id: "starter",
className: "  w-[414PX] h-[500PX] flex flex-col justify-between items-center",
children: [
El({
element: "img",
id: "img-starter",
className: "mt-[200px]",
src: "./src/images/logo.png",
// onclick: () => {
// Router().navigate("/welcome");
// },
}),
El({
element: "img",
id: "img-starter",
className: "w-[48px] h-[48px] mb-[180px]",
src: "./src/images/gif.gif",
}),
],
});
};

export default header;