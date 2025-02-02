import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	const params = useParams()
	const navigate = useNavigate()

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	
	useEffect(() => {
		console.log("store", store, params.id)
		const contact = store.listContacts.find ((contact) => contact.id === parseInt (params.id))
		if(contact) {
		  setName(contact.name);
		  setPhone(contact.phone);
		  setEmail(contact.email);
		  setAddress(contact.address);
		}
  
	  }, []);

	return (
		<div className="container contact">
		<h1 className="text-center">Update Contact</h1>

		<form className="container">
			<div className="mb-3">
				<label for="formGroupExampleInput1" className="form-label">Full Name</label>
				<input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Full name" onChange={(e) => setName(e.target.value)} value={name} />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput2" className="form-label">Email</label>
				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput3" className="form-label">Phone</label>
				<input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput4" className="form-label">Address</label>
				<input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} value={address} />
			</div>
			<div className="mb-3">
				<button type="button" className="btn btn-primary" onClick={() => {
					actions.editContact(parseInt (params.id), { name, email, phone, address});
					navigate("/")
					}}>Update Contact</button>
			</div>
		</form>

		<Link to="/"><a>Back to Contacts</a></Link>
	</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
export default EditContact