import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../utils/Constants";

export const Index = () => {
	const [Data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			fetch(url)
				.then((res) => res.json())
				.then((res) => setData(res));
		};
		getData();
	}, []);

	return (
		<div className="grid grid-cols-3 gap-4 mt-4 ml-6 mr-6 ">
			{Data.map((item) => {
				return (
					<div className="bg-green-100 ... shadow-lg " key={item.tokenId}>
						<div className="text-gray-900  text-base"> Token ID: {item.tokenId}</div>
						<img className="w-sm object-fill h-48 w-full " src={item.uri} alt="" />
						<div className="font-bold text-xl mb-2">Price:{item.minPrice} Ether</div>
						<Link to={`/views/${item.tokenId}`}>
							<button className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
								View More
							</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
};
