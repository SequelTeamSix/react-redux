import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
	budget: 100,
	items: ["Eggs", "Bread"]
};

const grocerySlice = createSlice({
	name: "grocery",
	initialState,
	reducers: {
		increaseBudget(state) {
			state.budget += 10;
		},
		decreaseBudget(state) {
			if (state.budget >= 10) {
				state.budget -= 10;
			}
		},
		addItem(state, action) {
			state.items.push(action.payload);
		}
	}
});

export const store = configureStore({ reducer: grocerySlice.reducer });
export const actions = grocerySlice.actions;
