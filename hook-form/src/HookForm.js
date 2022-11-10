import React, { useState } from  'react';
    
const HookForm = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [passWord, setpassWord] = useState("");  
    const [conPassword, setconPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, passWord, conPassword };
        console.log("Welcome", newUser);
    	setfirstName("");
        setlastName("");
    	setemail("");
    	setpassWord("");
        setconPassword("");
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setfirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setlastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email" value={email} onChange={ (e) => setemail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={passWord} onChange={ (e) => setpassWord(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={conPassword} onChange={ (e) => setconPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h3> Your form data : </h3>
        <p> First Name : {firstName}</p>
        <p> Last Name : {lastName}</p>
        <p> Email : {email} </p>
        <p> Password : {passWord} </p>
        <p> Confirm Password : {conPassword} </p>
        </div>
    );
};
    
export default HookForm;