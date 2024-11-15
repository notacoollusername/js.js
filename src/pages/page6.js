import { El } from "../el/el";

import { router } from "../routes/router";
export const page6 = () => {
  return El({
    element: "div",
    id: "",
    className: "w-[415px] border border-black h-[700px] overflow-y-hidden flex flex-col items-center",
    children: [
      El({
        element: "img",
        id: "img",
        className: "h-[82px] w-[54px] object-cover mt-[132px]",
        src: "../src/images/logo (1).png",
      }),
      El({
        element: "div",
        id: "",
        className: "",
        children: [
          El({
            element: "p",
            id: "",
            className: "font-[600] text-[25px] mt-[100px]",
            children: ["Login to Your Account"],
          }),
          El({
            element: "div",
            id: "",
            className: "mt-4 w-full px-6",
            children: [
              El({
                element: "input",
                id: "email",
                className: "w-full p-2 border border-gray-300 rounded-md",
                type: "text",
                placeholder: "Email",
              }),
              El({
                element: "input",
                id: "password",
                className: "w-full p-2 border border-black-300 rounded-md mt-4",
                type: "password",
                placeholder: "Password",
              }),
              El({
                element: "div",
                id: "rememberMeWrapper",
                className: "flex items-center mt-4  mx-[120px]",
                children: [
                  El({
                    element: "input",
                    id: "rememberMe",
                    className: "mr- ",
                    type: "checkbox",
                  }),
                  El({
                    element: "label",
                    id: "rememberMeLabel",
                    className: "text-sm ",
                    children: ["Remember Me"],
                  }),
                ],
              }),
              El({
                element: "button",
                id: "signin",
                className: "w-full px-4 py-2 bg-black border-black text-white rounded-full mt-[130px] hover:bg-gray-300",
                onclick: () => {
                    router.navigate("/home");
                    },
                children: ["Sign In"],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default page6;

