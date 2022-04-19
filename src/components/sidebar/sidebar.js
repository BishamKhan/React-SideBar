import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import './sidebar.css'
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import {BiSearch} from "react-icons/bi";
 
export default function Sidebar(){

    const [open, setOpen]=useState(false)
    const toggle=()=>setOpen(!open);


    const inputAnimation={
        hidden:{
            width:0,
            padding:0,
            opacity:0,
        },
        show:{
            width:"140px",
            padding:"5px 15px",
            opacity:1,
            transition:{
                duration:0.2,
            }

        }
    }

    const showAnimation={
        hidden:{
            width:0,
            opacity:0,
            transition:{
                duration:0.5
            },
        },
        show:{
            width:"auto",
            opacity:1,
            transition:{
                duration:0.2,
            }

        }
    }
    
    
    return(
        <div className="main-container">
            <motion.div animate={{width: open ? "200px" : "40px",transition:{
                duration:0.5,type:"spring",damping:9
            } }} className="sidebar">
           <div className="top_section">
               {open && <motion.h1  variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden" className="logo">Do some coding</motion.h1>
               }
             
               <div className="bars"> <FaBars onClick={toggle} /> </div>
           </div>

           <div className="search">
               <div className="search_icon"> <BiSearch/> </div>
               <AnimatePresence>
               {open && <motion.input 
               initial="hidden"
               animate="show"
               exit="hidden"
               variants={inputAnimation}
               placeholder="Search"/>}
               </AnimatePresence>
           </div>
           
            <div className="routes">
                
                <div  className="links"> 
                <div className="icons"><FaHome /></div>
                <AnimatePresence>
                    {open && 
                    <motion.div 
                    // onClick={navigate('/home')}
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text ">Home</motion.div>}
                </AnimatePresence>
                
                </div>

                <div className="links">
                <div className="icons"><FaHome /></div>
                <div className="link_text ">User</div>
                </div>

                <div className="links">
                <div className="icons"><FaHome /></div>
                <div className="link_text ">Saved</div>
                </div>

            </div>
            </motion.div>
 
 
        </div>
    )
}