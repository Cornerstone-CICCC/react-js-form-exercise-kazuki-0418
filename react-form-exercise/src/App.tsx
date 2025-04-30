import { useState } from "react";
import "./App.css";

const App = () => {
	const [greeting, setGreeting] = useState("");

	const handleClick = () => {
		const firstName = (document.getElementById("firstname") as HTMLInputElement)
			.value;
		const lastName = (document.getElementById("lastname") as HTMLInputElement)
			.value;
		const age = (document.getElementById("age") as HTMLInputElement).value;
		const favoriteFoods = Array.from(
			document.querySelectorAll('input[name="favoriteFoods"]:checked'),
		).map((input) => (input as HTMLInputElement).value);

		setGreeting(
			`Hello ${firstName} ${lastName}, you are ${age} years old and your favorite foods are: ${favoriteFoods.join(", ")}`,
		);
	};
	const handleClear = () => {
		(document.getElementById("firstname") as HTMLInputElement).value = "";
		(document.getElementById("lastname") as HTMLInputElement).value = "";
		(document.getElementById("age") as HTMLInputElement).value = "";
		const checkboxes = document.querySelectorAll('input[name="favoriteFoods"]');
		for (const checkbox of checkboxes) {
			(checkbox as HTMLInputElement).checked = false;
		}
		setGreeting("");
	};

	return (
		<div>
			<h1>User Form</h1>
			<form>
				<div>
					<label htmlFor="firstname">First Name:</label>
					<input type="text" id="firstname" name="firstname" />
				</div>
				<div>
					<label htmlFor="lastname">Last Name:</label>
					<input type="text" id="lastname" name="lastname" />
				</div>
				<div>
					<label htmlFor="age">Age:</label>
					<input type="number" id="age" name="age" />
				</div>
				<div>
					<label htmlFor="favoriteFoods">Favorite Foods:</label>
					<div>
						<input
							type="checkbox"
							id="chicken"
							name="favoriteFoods"
							value="Chicken"
						/>
						<label htmlFor="chicken">Chicken</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="beef"
							name="favoriteFoods"
							value="Beef"
						/>
						<label htmlFor="beef">Beef</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="vegetables"
							name="favoriteFoods"
							value="Vegetables"
						/>
						<label htmlFor="vegetables">Vegetables</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="dessert"
							name="favoriteFoods"
							value="Dessert"
						/>
						<label htmlFor="dessert">Dessert</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="pork"
							name="favoriteFoods"
							value="Pork"
						/>
						<label htmlFor="pork">Pork</label>
					</div>
				</div>
			</form>

			<button type="button" onClick={handleClick}>
				Display User
			</button>
			<button type="button" onClick={handleClear}>
				Clear
			</button>

			<div className="output">{greeting}</div>
		</div>
	);
};

export default App;
