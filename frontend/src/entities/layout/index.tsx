import { useEffect } from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../../features/header";
import {useGetArticlesQuery} from "../../http/api/articles";

export const Layout = () => {
	const {data} = useGetArticlesQuery();
	if(data){
console.log('hjej')
	}
	console.log({data})



	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
	);
};

export default Layout;
