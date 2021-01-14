import React from "react";
import image from "../medi14.jpg";

export default function Home(){
	return (
		<main>

			<img src={image} alt=" cellphone" className="absolute object-cover w-full h-full"/>

			<section className=" relative flex justfy-center min-h-screen pt-12 lg:pt-64 px-8 " >

			 <h1 className="text-6xl text-blue-600 font-bold cursive leading-none lg:leading-snug home-name "> 
				Salut... I'm Kudas.
			 </h1>

			</section>

		</main>

		)
}