import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import { Provider } from "react-redux";
import UserBar from "./components/userbar";
import UserForm from "./components/userform";
import { store } from "./store";
import Budget from "./components/budget";
import GroceryList from "./components/grocerylist";
import GroceryForm from "./components/groceryform";

export const guestContext = createContext();

function App() {
	const [guest, setGuest] = useState({ username: "Special Guest", email: "No email" });

	return (
		<>
			{/* <guestContext.Provider value={[guest, setGuest]}>
				<UserBar />
				<UserForm />
			</guestContext.Provider> */}

			<BrowserRouter>
				<Provider store={store}>
					<NavBar />
					<Routes>
						<Route path="budget" element={<Budget />}></Route>
						<Route path="list" element={<GroceryList />}></Route>
						<Route path="form" element={<GroceryForm />}></Route>
						<Route exact path="" element={<h1>Welcome to the Grocery!</h1>}></Route>
					</Routes>
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
