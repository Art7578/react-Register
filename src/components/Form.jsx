import { useState } from "react";

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

  return (
    <div>
        <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <input 
            type="password" 
            email={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
        />
        <button onClick={() => handleClick(email, pass)}>
            {title}
        </button>
    </div>
  )
}

export {Form};