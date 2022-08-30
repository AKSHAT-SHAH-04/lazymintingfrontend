import "./App.css";
import { CreateVoucher } from "./components/CreateVoucher";
import { Index } from "./components/Index";
import { Navbar } from "./components/Navbar";
import { Details } from "./components/Details";
import { NoPageFound } from "./components/NoPageFound";
import { About } from "./components/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Index />}></Route>

					<Route path="create" element={<CreateVoucher />}></Route>

					<Route path="views/:id" element={<Details />}></Route>
					
					<Route path="about" element={<About />}></Route>

					{/* <Route path="/profile" element={<Profile />}></Route> */}

					<Route path="*" element={<NoPageFound />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
