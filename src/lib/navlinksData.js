import React from 'react'
import { AiOutlineHome, AiOutlineMail, AiOutlineFolder, AiOutlineGlobal } from 'react-icons/fa';


const navLinks = [
    {
        name: "Home",
        path: "/#",
        icon: <AiOutlineHome />
    },

    {
        name: "About",
        path: "/#about",
        icon: <AiOutlineGlobal />
    },

    {
        name: "Projects",
        path: "/#projects",
        icon: <AiOutlineFolder />
    },

    {
        name: "Contact",
        path: "/#contact",
        icon: <AiOutlineMail />
    },
];
    