
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail,setName,setPass } from '../../redux/actions/action';
import './login.css'
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontVariant:'small-caps',
    backgroundImage: './black_food.jpg'
  },
  login: {
    width: '400px',
    padding: '40px',
    border: '2px solid black',
    borderRadius: '4px',
    backgroundColor: '#F7F7F7',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#33bbff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft:'140px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
  },
};


function Login({
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
}) {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
          
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));

      window.alert("Successfully Logged In");

      
          if (selectedUserType === 'Customer') {
            navigate('/home');
          } else if (selectedUserType === 'admin') {
            navigate('/adminHome');
          } else if (selectedUserType === 'restaurant') {
            navigate('/restaurantHome');
          } else if (selectedUserType === 'delivery') {
            navigate('/deliveryHome');
          }

      // navigate("/home");
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState('');
    const UserTypeChange = (e) => {
    setSelectedUserType(e.target.value);
  };
  return (
    <div style={styles.container} className='container'>
      <div style={styles.login}>
        <form onSubmit={check}>
          <h2 style={styles.title}>Login</h2>
         
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
          <input
                type='radio'
                name='gender'
                value='Customer'
                id='customer'
                required
                onChange={UserTypeChange} // Add onChange handler to update selectedUserType
              />
              <label htmlFor='customer'>Customer</label>
              <br /><br></br>
              <input
                type='radio'
                name='gender'
                value='restaurant'
                id='restaurant'
                required
                onChange={UserTypeChange} // Add onChange handler to update selectedUserType
              />
              <label htmlFor='restaurant'>Restaurant</label>
              <br /><br />
              <input
                type='radio'
                name='gender'
                value='delivery'
                id='delivery'
                required
                onChange={UserTypeChange} // Add onChange handler to update selectedUserType
              />
              <label htmlFor='delivery'>Delivery Man</label>
              <br /><br />
              <input
                type='radio'
                name='gender'
                value='admin'
                id='admin'
                required
                onChange={UserTypeChange} // Add onChange handler to update selectedUserType
              />
              <label htmlFor='admin'>Admin</label>
              <br /><br />
            </div>

          <button style={styles.button} type="submit">
            Login
          </button>
          {checkpass && alert('Successful login ' + name)}
          {checkpass && navigate('/home')}
          <Link to="/signup" style={styles.registerLink}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);