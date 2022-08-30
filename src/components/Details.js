import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { contract, provider } from "../utils/Constants";
import { ethers } from "ethers";
import { url } from "../utils/Constants";

export const Details = () => {
	const [UserId, setUserId] = useState("");
	const [UserData, setUserData] = useState([]);
	const [Txhash, setTxhash] = useState("");

	const { id } = useParams();

	useEffect(() => {
		const getData = () => {
			setUserId(id);
			fetch(`${url}views/${id}`)
				.then((res) => res.json())
				.then((res) => setUserData(res));
		};

		getData();
	}, []);

	const buyNft = async () => {
		const buyer = await provider.send("eth_requestAccounts", []);
		let tokenId;
		let minPrice;
		let uri;
		let signature;
		UserData.map((item) => {
			tokenId = item.tokenId;
			minPrice = item.minPrice;
			uri = item.uri;
			signature = item.signature;
		});
		const parsedAmount = minPrice.toString();
		const amount = { value: ethers.utils.parseEther(parsedAmount) };

		try {
			const tx = await contract.redeem(buyer[0], tokenId, minPrice, uri, signature, amount);
			setTxhash(tx.hash);
		} catch (error) {
			alert("Token Already minted");
		}
	};

	return (
		//<div className="grid grid-cols-1 gap-4 mt-4 ml-6 mr-6 ">
			<div className="mt-6 container mx-auto">
			{UserData.map((item) => {
				return (
					<div className="bg-grey-100 shadow-lg " key={item.tokenId}>
						<div className="text-gray-900  text-base"> Token ID: {item.tokenId}</div>
						<img className="w-l object-contain h-48 w-full" src={item.uri} alt="" />
						<div className="font-bold text-xl mb-2">Price:{item.minPrice} Ether</div>
						<button
							onClick={buyNft}
							className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
						>
							Buy Now
						</button>
						<p>Transaction hash: {Txhash}</p>
					</div>
				);
			})}
		</div>
	);
};
