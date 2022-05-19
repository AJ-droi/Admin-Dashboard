import { useEffect, useState } from "react";
import "../App.css";

const SignUp = () => {
    // eslint-disable-next-line
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
        window.location= "/dashboard";
    }

    console.log(form);
  return (
    <div className="login">
        <h3>Welcome</h3>
        <p>Welcome! Please enter your details</p>

        <form className="login-form" onSubmit={submitHandler}>

        <div className='login-form-control'>
                <label htmlFor="text">Name</label> <br />
                <input type="text" id="text" name="Name" placeholder="Your Name" onChange={handleChange}/>
            </div>
            
            <div className='login-form-control'>
                <label htmlFor="email">Email</label> <br />
                <input type="text" id="email" name="Email" placeholder="Enter your email" onChange={handleChange}/>
            </div>

            <div className='login-form-control'>
                <label htmlFor="pass">Password</label> <br />
                <input type="password" id="pass" placeholder="Create your Password" name="Password" onChange={handleChange} />
            </div>

            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp