import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState("");
	const [filteredMonsters, setFilterMonsters] = useState(monsters);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) => setMonsters(users));
	}, []);
	useEffect(() => {
		const filterMonster = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});
		setFilterMonsters(filterMonster);
	}, [searchField, monsters]);

	const onSearchChange = (e) => {
		// console.log(e.target.value);
		const searchFieldString = e.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">Monster</h1>
			<SearchBox onChangeHandler={onSearchChange} />

			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
