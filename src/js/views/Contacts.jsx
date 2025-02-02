import React, { useContext } from "react";
import "../../styles/home.css";
import CardContact from "../component/CardContact.jsx";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const Contacts = () => {
	const { store, actions } = useContext (Context) 
	console.log(store.listContacts)

return(
	<div className="w-75 mx-auto">
		<div className="d-flex justify-contect-end">
			<Link to="/addContact">
			<button className="btn btn-success add"> Add a New Conctact</button>
			</Link>
			</div>
			<ul className="list-group mt-3">
				{store.listContacts && store.listContacts.length > 0 && store.listContacts.map ((contact, index) => {
					return(

						<CardContact contact={contact} key={index}/>
					)

				})}

			</ul>
	</div>
) 

}
export default Contacts