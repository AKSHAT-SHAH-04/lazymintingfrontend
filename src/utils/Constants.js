import abi from "./MyNFT.json";
import { ethers } from "ethers";

export const Abi = abi.abi;
const contractAddress = "0x3399F9de3F2D6314D19De86Bd1d00bFfF8ac4DE6";
export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const url = "http://localhost:4000/lazyApi/";

export const contract = new ethers.Contract(contractAddress, Abi, signer);
