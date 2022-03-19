import * as Fa from "react-icons/fa";
import * as Ai from "react-icons/ai";

export const navMenuLinks = [
  {
    pageName: "Home",
    path: "/",
    icon: <Ai.AiFillHome />,
    children: "",
  },
  // {
  //   pageName: "About",
  //   path: "/about",
  //   icon: <Fa.FaUserAlt />,
  //   children: [],
  // },
  {
    pageName: "About App",
    path: "/about/about-app",
    icon: <Fa.FaReact />,
  },
  {
    pageName: "About Author",
    path: "/about/about-author",
    icon: <Fa.FaPencilAlt />,
  },
];
