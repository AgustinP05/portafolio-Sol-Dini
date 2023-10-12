'use client'

import Link from "next/link"
import { AnimatePresence, motion} from "framer-motion"
import React from "react"

const routes =[
    {route:"/",
    name:"Home"},
    {route:"/",
    name:"Sobre mi"},
    {route:"/",
    name:"Proyectos"},
    {route:"/",
    name:"Contacto"},
]




const menuVariants={
    
    animate:{ transition:{delayChildren:0.2,staggerChildren:0.2}},
    exit:{transition:{delayChildren:0.2,staggerChildren:0.2,staggerDirection: -1}},
   
}

const linksVariants={
    initial:{
        opacity:0,
        y:-60,  
    },
    animate:{opacity:1, y:0},
    exit:{
        opacity:0,
        y:-60,
    },
    whileHover: {
        scale:1.25,
        transition:{type:"spring", stiffness: 300,}
       
    },
   
}


export default function Navigation({visibility}) {
    return <AnimatePresence>{visibility &&
    <motion.ul
    variants={menuVariants}     
    initial="initial"           
    animate="animate"
    exit="exit"
    
    className="flex justify-between absolute right-0 w-[540px] my-5 mr-10">
        {routes.map(({route,name},index)=>(
            <motion.li key={index}
            custom={index}
            variants={linksVariants}
            whileHover={linksVariants.whileHover}
           
            className="group/link w-[110px] h-[110px] rounded-xl bg-red-500">
                <Link  href={route} className="w-full h-full invisible bg-blue-500/50 flex justify-center items-center rounded-xl font-bold text-[20px] group-hover/link:visible">
                        {name}
                </Link>
            </motion.li>
        ))}
    </motion.ul>}
    </AnimatePresence>
}