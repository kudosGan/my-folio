import React from "react";
import {NavLink} from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function NavBar(){
	return (
		<header className ="bg-blue-300">
			<div  className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink to="/" exact 
					activeClassName="text-white"
					className="inflex-flex items-center py-6 px-3 mr-4 text-black-200 hover:text-red-800 text-6xl font-bold cursive tracking-widest">
						Kudas
					</NavLink>
					<NavLink to="/post"
					className="in-line-flex items-center py-6 px-3 my-6 text-black-200 hover:text-red-800 text-3xl font-bold cursive tracking-widest"
					activeClassName="text-red-100 bg-blue-300">
						Blogs
					</NavLink>
					<NavLink to="/Project" 
					className="in-line-flex items-center py-6 px-3 my-6 text-black-200 hover:text-red-800 text-3xl font-bold cursive tracking-widest"
					activeClassName="text-red-100 bg-blue-300">
						Projects					
					</NavLink>
					<NavLink to="/badges" 
					className="in-line-flex items-center py-6 px-3 my-6 text-black-200 hover:text-red-800 text-3xl font-bold cursive tracking-widest"
					activeClassName="text-red-100 bg-blue-300">
						 Digital Credential					
					</NavLink>
					<NavLink to="/certificate" 
					className="in-line-flex items-center py-6 px-3 my-6 text-black-200 hover:text-red-800 text-3xl font-bold cursive tracking-widest"
					activeClassName="text-red-100 bg-blue-300">
						 Certificate					
					</NavLink>
					<NavLink to="/about" 
					className="in-line-flex items-center py-6 px-3 my-6 text-black-200 hover:text-red-800 text-3xl font-bold cursive tracking-widest"
					activeClassName="text-red-100 bg-blue-300">
						About Me
					</NavLink>
				</nav>
				<div className=" in-line-flex py-3 px-3 my-6">
					<SocialIcon url="https://www.linkedin.com/in/kudas-ganesan-89485167/" className="mr-4" target="blank" fgColor="#fff" style ={{height: 25, width: 25}}/>
					<SocialIcon url="https://www.youracclaim.com/users/kudas-ganesan" className="mr-4" target="blank" fgColor="#fff" style ={{height: 25, width: 25}}/>
					<SocialIcon url="https://www.facebook.com/kudos.gan" className="mr-4" target="blank" fgColor="#fff" style ={{height: 25, width: 25}}/>
				</div>
			</div>

		</header>
		

		)
}