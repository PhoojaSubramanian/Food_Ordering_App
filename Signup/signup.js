import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/navbar';
import './signup.css'
import Footer from '../Footer/footer';
export default function Signup() {
    const [user_name,setUserName] = useState('');
    const[mob_num,setMob_Num]=useState('');
    const[email,setEmail]=useState('');
    const [pass_word,setPass_Word] = useState('');
    const[con_pass,setCon_Pass]=useState('');
    var name ="";
    var mob = "";
    var pass="";
    var cpass="Confirm password doesn't match the given password";
    const ChangeUserName = (e) =>
    {
        setUserName(e.target.value);
    };
    const ChangePassword = (e) =>
    {
        setPass_Word(e.target.value);
    }
    const ChangeConPassword = (e) =>
    {
        setCon_Pass(e.target.value);
    }
    const ChangeNumber= (e) =>
    {
        setMob_Num(e.target.value);
    }
    const ChangeEmail= (e) =>
    {
        setEmail(e.target.value);
    }
    const ValidateRegister=  (e)=>
    {
        name="";
        mob="";
        pass="";
        cpass="";

        e.preventDefault();
        if(user_name.length<8)
        name ="Enter username with more than 8 characters";
        if(mob_num.length<10)
        mob ="Enter valid 10 digit mobile number";
        var len =pass_word.length;
        if(len<8)
        pass ="Enter a password with aleast 8 characters";
        
        var spl=/[^a-zA-Z0-9\s]/.test(pass_word);
        var num=/\d/.test(pass_word);
        if(!spl)
        {
            pass+="  Password must contain a special character";
        }
        if(!num)
        {
            pass+="  Password must contain a number";
        }
        if(pass_word!==con_pass)
        document.getElementById("cpass").innerHTML=cpass;
        
        document.getElementById("nam").innerHTML=name;
        document.getElementById("mob").innerHTML=mob;
        document.getElementById("pass").innerHTML=pass;
    }
  return (
    <div>

        <Navbar/>
    <div className = "signup-container">
        <h1 id = "signup-tit">Register</h1>
        <form className='signup-form'onSubmit={ValidateRegister} >

        <div className='sign-form'>
        <label htmlFor ="user_name">UserName</label>
        <input type='text' value={user_name} id="user_name" onChange={ChangeUserName} required placeholder='Enter Username'></input>
        </div>

        <div className='sign-form'>
        <label htmlFor ="mob_num">MobileNumber</label>
        <input type='number' value={mob_num} id="mob_num" onChange={ChangeNumber} required placeholder='Enter Mobile Number'></input>
        </div>

        <div className='sign-form'>
        <label htmlFor ="email">Email</label>
        <input type='email' value={email} id="email" onChange={ChangeEmail} required placeholder='Enter Email'></input>
        </div>

        <div className='sign-form'>
        <label htmlFor ="pass_word">Password</label>
        <input type='text' value={pass_word} id="pass_word" onChange={ChangePassword} required placeholder='Enter Password'></input>
        </div>

        <div className='sign-form'>
        <label htmlFor ="con_pass">Confirm Password</label>
        <input type='text' value={con_pass} id="con_pass" onChange={ChangeConPassword} required placeholder='ReEnter the Password'></input>
        </div>
        <br></br>
        <br></br>
        <button id ="login-sub" type="submit">Register</button>

        <p id="nam"></p><p id="mob"></p>
        <p id="pass"></p>
        <p id="cpass"></p>
        </form>
        <br></br>
        <p>If you have already have an account click on the <Link to = '/log'>login</Link> </p>
    </div>
    <Footer/>
    </div>
  )
}
