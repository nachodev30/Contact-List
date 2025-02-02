import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import AddContact from "./views/AddContact.jsx";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import EditContact from "./views/EditContact.jsx";
import Contacts from "./views/Contacts.jsx";


const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar /> */}
					<Routes>
						<Route path="/" element={<Contacts />} />
						<Route path="/addContact" element={<AddContact />} />
						<Route path="/editContact/:id" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
