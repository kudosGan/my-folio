
import React, { useState, useEffect } from "react";

import sanityClient from "../client.js";


export default function Badges(){
	const [badgesData, setBadgesData] = useState(null);
	useEffect(() =>{
		sanityClient
			.fetch(
				`*[_type =="badges"] {
					title,
					slug,
						mainImage{
						asset->{
							_id,
							url
						},
						alt
					}
				}`)
			.then((data) => setBadgesData(data))
			.catch (console.error);

	}, [])
		return  (
		<main className="bg-green-300 min-h-screen p-12" >
			<section className="container my-12 mx-auto px-4 md:px-12">

				<h1 className=" text-5xl flex justify-center cursive">Digital Credential</h1>
				<a
					
                    href="https://www.youracclaim.com/users/kudas-ganesan"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                                       				
				<h2 className="text-lg text-gray-600 flex justify-center mb-12">welcome to my page of Digital Credential click to Acclaim page</h2>
				</a>			
				<section className ="grid ms:grid-cols-2 lg:grid-cols-5 gap-5">
				
				{ badgesData && badgesData.map((badges, index) =>(
					
						<div className="  text-center text-gray-800 text-lg bg-blue-600 text-red-100 relative rounded-lg  ">
						
						<img
							src={badges.mainImage.asset.url}
							alt={badges.mainImage.alt}
							className="  bg-blue-400 box-content h-40 w-40 p-4 border-4 object-center "
						/>
						
						<h3 >{badges.title}	</h3>
						</div>
				))}
				</section>
			</section>
		</main>
		);
}