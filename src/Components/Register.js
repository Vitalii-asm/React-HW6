import React, { useState } from 'react'
import countries from './Countries.js';

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [country, setCountry] = useState("")
	const [accepted, setAccepted] = useState("false");

	const handleSubmit = e => { 
		e.preventDefault();
		console.log(`
			Email: ${email};
			Password: ${password};
			Country: ${country};
			Accepted: ${accepted};
		`)
	}



  return (
	  <form onSubmit={handleSubmit}>
		  <h1>Create account</h1>
		  <label>Email:</label>
		  <input
			  name='email'
			  type='email'
			  value={email}
			  onChange={e => setEmail(e.target.value)} 
			  required
		  />

		  <label>Password:</label>
		  <input
			  name='password'
			  type='password'
			  value={password}
			  onChange={e => setPassword(e.target.value)}
			  required
		  />

		  <label>Country:</label>
		  <select
			  name='country'
			  type='country'
			  value={country}
			  onChange={e => setCountry(e.target.value)}
			  required>
			  <option key=""></option>
			  {
				  countries.map(country => (
					  <option key={country}> {country}</option>
					))
			  }
			  
			  </select>

		  <label>
		  <input
			  name='accepted'
			  type='checkbox'
			  value={accepted}
			  required
			  />
			  Accepted
		  </label>
		  <button>submit</button>
		  
	 </form>
  )
}




