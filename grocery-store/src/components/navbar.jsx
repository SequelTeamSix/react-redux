import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<Link to="/form">Grocery Form</Link>
			<span> </span>
			<Link to="/list">Grocery List</Link>
			<span> </span>
			<Link to="/budget">Grocery Budget</Link>
			<span> </span>
			<Link to="/">Home</Link>
		</nav>
	);
}
