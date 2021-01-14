import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import sanityClient from "../client.js";


export default function Post(){
	const [postData, setPost] = useState(null);

	useEffect(() =>{
		sanityClient
			.fetch(
				`*[_type =="post"] {
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
			.then((data) => setPost(data))
			.catch (console.error);

	}, [])
	

	return  (
		<main className="bg-green-100 min-h-screen p-12" >
			<section className="container my-12 mx-auto px-4 md:px-12">
				<h1 className=" text-5xl flex justify-center cursive">Blogs Post Page</h1>
				<h2 className="text-lg text-gray-600 flex justify-center mb-12">welcome to my page of blog Posts</h2>
				<div className ="grid ms:grid-cols-2 lg:grid-cols-3 gap-8">
					{ postData && postData.map((post, index) =>(
					<article>
						<Link to={"/post/" +post.slug.current} key ={post.slug.current}>
						<span 
						className ="block h-60 relative rounded-lg shadow leading-snug bg-white border-l-8 " 
						key= {index}>
						<img
							src={post.mainImage.asset.url}
							alt={post.mainImage.alt}
							className="w-full h-full rounded-t object-cover absulte"
						/>
							<span className=" block-auto relative h-full flex-auto justify-end items-end pr-4 pb-4">
								<h3 className=" text-center text-gray-800 text-lg font-blog px-3 py-4 bg-red-500 text-red-100 bg-opacity-75 rounded-b">
								{post.title}
								 </h3>
							</span>
						</span>
						</Link>
					</article>
				))}
				</div>
			</section>
		</main>
		)
		
}