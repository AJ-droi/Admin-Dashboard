import React,{useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "../App.css";

const Login = () => {

  const [formValid, setFormValid] = useState(false);
    const [form, setForm] = useState({
        Name: "",
        Email: "",
        Password: ""
    }
    )  

    useEffect(() => {
      if (form.Name !== "" &&
      form.Email !== "" &&
      form.Password !== ""){
          setFormValid(true)
      }else {
          setFormValid(false)
      }
    console.log(form);
    }, [form])

  const handleChange =(e) => {
    setForm({
        ...form, [e.target.name] : e.target.value
    })
}

  const submitHandler = (e) =>{
    e.preventDefault();
    sessionStorage.setItem('userDetails', JSON.stringify({...form}))
    console.log("userDetails")
    window.location= "/dashboard/home";
}
  return (
    <div>
      <div className="login">
        <h3>Welcome</h3>
        <p>Welcome! Please enter your details</p>

        <form className="login-form" onSubmit={submitHandler}>

        <div className='login-form-control'>
                <label htmlFor="text">Name</label> <br />
                <input type="text" id="text" name="Name" placeholder="Your Name" onChange={handleChange}/>
            </div>

            <div className='login-form-control'>
                <label htmlFor="pass">Password</label> <br />
                <input type="password" id="pass" placeholder="Enter your Password" name="Password" onChange={handleChange} />
            </div>

            <button type="submit">Log in</button>
        </form>
        <p> Don't have an account <Link to="/signup"> Sign Up</Link></p>
    </div>
    </div>
  )
}

export default Login