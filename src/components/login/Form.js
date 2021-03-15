import { useState } from "react";
import "./login.css"
const Form = ({ option }) => {
    const [username, setUsername] = useState('spaniard');
    const [tokken, setTokken] = useState("");

    const changeHandler = () => {}
	
    return (
		<form className='account-form' onSubmit={(evt) => console.log("submit")}>
			<div className={'account-form-fields ' + (option === 1 ? 'sign-in' :'sign-up' ) }>
                <input id='username' name='username' type='username' placeholder='username' required={option === 2} disabled={option === 1 }  onChange={changeHandler}/>    
				<input id='tokken' name='tokken' type='tokken' placeholder='Tokken' required onChange={changeHandler}/>
			</div>
			<button className='btn-submit-form' type='submit'>
				{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'new user') }
			</button>
		</form>
	)
}
export default Form;