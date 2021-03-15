import { useState } from "react";
import Form from "./Form";
import "./login.css";

const Login = () => {
    const [option, setOption] = useState(1);
    
    return (
        <div className="container">
            <logo>Space trade</logo>
            <header>
				<t>Sign in your account</t>
			</header>
            <ul className='options'>
				<li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Sign in</li>
				<li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Sign up</li>
			</ul>
			<Form option={option} />
        </div>
    )
}
export default Login;