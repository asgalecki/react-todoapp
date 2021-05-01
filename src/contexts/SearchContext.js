import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
	const [search, setSearch] = useState("");

	const addSearch = (filter) => {
		setSearch(filter);
	};

	return (
		<SearchContextProvider value={{ search, addSearch }}>
			{props.children}
		</SearchContextProvider>
	);
};

export default SearchContextProvider;
