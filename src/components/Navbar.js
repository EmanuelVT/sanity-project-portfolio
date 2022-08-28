import React from "react"
import {NavLink} from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar(){
    return(
        <header className="bg-red-600"> 
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink  exact  className= {({isActive}) => {
                        let classes ="inflex-flex items-center py-8 px-3 mr-4 text-red-100 hover:text-green-200 text-4xl font-bold cursive tracking-widest";
                        if(isActive) classes = classes + " text-white";
                        return classes;
                     }} to="/">
                        Emanuel
                    </NavLink>
                    <NavLink to="/post" exact 
                    className={({isActive}) => {
                        let classes = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-200"
                        if(isActive) classes = classes + " text-red-100 bg-red-700"
                        return classes;
                    }}>
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"  exact 
                    className={({isActive}) => {
                        let classes = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-200"
                        if(isActive) classes = classes + " text-red-100 bg-red-700"
                        return classes;
                    }}>
                        Projects
                    </NavLink>
                    <NavLink to="/about" exact 
                    className={({isActive}) => {
                        let classes = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-200"
                        if(isActive) classes = classes + " text-red-100 bg-red-700"
                        return classes;
                    }}>
                        About Me!
                    </NavLink>
                </nav>

                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/EmanuelVT" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/emanuel-vasconcelos-torres-53077666/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                    <SocialIcon url="https://www.facebook.com/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>

                </div>

            </div>
        </header>
    )
}