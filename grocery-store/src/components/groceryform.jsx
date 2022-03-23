import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store";

export default function GroceryForm() {
	const itemInput = useRef();
	const dispatch = useDispatch();

	function addItem() {
		const item = itemInput.current.value;
		// const action = { type: "grocery/addItem", payload: item };
		const action = actions.addItem(item);
		alert(`Item: ${item} has been added`);
		dispatch(action);
	}

	return (
		<>
			<input placeholder="Enter Grocery Item for List" ref={itemInput} />
			<button onClick={addItem}>Add to List</button>
		</>
	);
}
