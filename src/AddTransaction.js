import React, { useState, useContext } from "react";
import { GlobalContext } from "./GlobalState";

function AddTransaction() {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);
	const { addTransaction } = useContext(GlobalContext);
	const handleAddition = (event) => {
		event.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 10000000),
			text,
			amount: +amount,
		};
		addTransaction(newTransaction);
		// This line will set the state of the description field to the default value which is null.
		setText((text) => (text = ""));
		// This line will set the state of the Amount field to the default value which is 0.
		setAmount((amount) => (amount = 0));
	};

	return (
		<div>
			<h3>Add New Transaction</h3>
			<form onSubmit={handleAddition}>
				<label htmlFor="text">
					<span class="red">*</span>Description
				</label>
				<input
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Description "
				/>

				<label className="div-amount" htmlFor="amount">
					<span class="red">*</span>Amount (negative - expanse ,
					positive - income)
				</label>
				<input
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					placeholder="*Amount"
				/>

				<button className="btn">Add Transaction</button>
			</form>
		</div>
	);
}
export default AddTransaction;
