import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
		console.log("1");
	}

	componentDidMount() {
		console.log("3");
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) =>
				this.setState(() => {
					return { monsters: users };
				})
			);
	}
	onSearchChange = (e) => {
		console.log(e.target.value);
		const searchField = e.target.value.toLowerCase();

		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		console.log("2");
		const filterMonster = this.state.monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(this.state.searchField);
		});
		return (
			<div className="App">
				<h1 className="app-title">Monster</h1>
				<SearchBox onChangeHandler={this.onSearchChange} />
				{/* {filterMonster.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})} */}
				<CardList monsters={filterMonster} />
			</div>
		);
	}
}

export default App;
