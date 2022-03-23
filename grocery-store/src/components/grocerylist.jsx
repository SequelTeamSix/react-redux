import { useSelector } from "react-redux";

export default function GroceryList() {
	const items = useSelector((state) => state.items);

	return (
		<>
			<h3>Groceries to Buy</h3>
			<ul>
				{items.map((i) => (
					<li key={i}>{i}</li>
				))}
			</ul>
		</>
	);
}
