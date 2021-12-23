import React,{useState} from 'react';
import LoginForm from "./LoginForm";

function Login() {

    const adminUser = {
        email: "tdb@tdb.com",
        password:"admin123"
    }
    
     const [user, setUser] = useState({name:"",email:""});
     const [error, setError] = useState("");
    
     const Login = details =>{
         console.log(details);
    
     if (details.email == adminUser.email && details.password == adminUser.password){
     console.log("Loged In");
     setUser({
         name: details.name,
         email: details.email
     });
    } else {
        console.log("wrong email or password");
        alert("wrong email or password");
        setError("wrong email or password");
    }
     } 
     
     
     const Logout = () =>{
         setUser({name:"",email:""});
     }
    return (
        <div className="App">
        {(user.email != "") ? (
        <div className="welcome">
            
            <button onClick={Logout}>Logout</button>
            
        </div>): (
            <LoginForm Login={Login} error={error}/>
        )}
           
    </div>
    )
}

export default Login;
