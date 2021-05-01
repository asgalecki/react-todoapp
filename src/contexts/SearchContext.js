import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
	const [search, setSearch] = useState("");

	const addSearch = (filter) => {
		setSearch(filter);
	};

	return (
		<SearchContext.Provider value={{ search, addSearch }}>
			{props.children}
		</SearchContext.Provider>
	);
};

export default SearchContextProvider;
