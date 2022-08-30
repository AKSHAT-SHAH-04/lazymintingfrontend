import { useState } from "react";

export const Navbar = () => {
	const [CurrentAccount, setCurrentAccount] = useState("");

	const walletConnect = async () => {
		if (!window.ethereum) {
			return alert("please install metamask");
		}
		const addr = await window.ethereum.request({ method: "eth_requestAccounts" });
		setCurrentAccount(addr[0]);
	};

	return (
		<nav className="bg-cyan-700 shadow-lg">
			<div className="container mx-auto">
				<div className="sm:flex justify-around">
					<a href="/" className="text-white text-3xl font-bold p-3">
					 	Dashboard
					</a>

					<ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
						<li className="sm:inline-block">
							<a href="/create" className="p-3 text-white text-2xl font-bold p-3 ">
								Generate a NFT
							</a>
						</li>
						<li className="sm:inline-block">
							<a href="/about" className="p-3 text-white text-2xl font-bold p-3">
								About
							</a>
						</li>
						<li className="sm:inline-block">
							{!CurrentAccount ? (
								<button onClick={walletConnect} className="p-3 text-white text-2xl font-bold p-3">
									Wallet Connect
								</button>
							) : (
								<p>{CurrentAccount}</p>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
