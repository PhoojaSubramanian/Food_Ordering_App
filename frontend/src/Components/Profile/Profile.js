
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import Navbar from '../NavBar/navbar';
import Address from '../Address/Address';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const customerId = 1; // Replace with the actual customer ID you want to fetch
  const [profile, setProfile] = useState(null)
  const [selectedContent, setSelectedContent] = useState(<Address  cust_id={customerId}/>);
  const [editProfile, setEditProfile] = useState(false);
  const [updateName, setUpdateName] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [updatePhone, setUpdatePhone] = useState('');
  const [updateAddress, setUpdateAddress] = useState('');
  const navigate = useNavigate();
  const HandleEditProfile = () => {
    setEditProfile(!editProfile);

    // Set the state variables with the current profile data when the "EDIT PROFILE" button is clicked
    setUpdateName(profile.customer_name);
    setUpdateEmail(profile.customer_email);
    setUpdatePhone(profile.customer_phone_number);
    setUpdateAddress(profile.customer_address);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/${customerId}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [customerId]);

  if (!profile) {
    return <div>
      <Navbar/>
      <br></br>
      <br></br>
      <center>
      <p>Sign In to see Profile</p>
      </center>
      </div>;
  }

  const handleEdit = () => {
    const updatedProfile = {
      customer_id: customerId,
      customer_name: updateName,
      password: "poiuytrewsdfgg", // Keep the password as it was before
      customer_email: updateEmail,
      customer_phone_number: updatePhone,
      customer_address: updateAddress,
      customer_image: profile.customer_image, // Assuming customer_image doesn't change in this edit
    };

    axios.put(`http://localhost:8080/edit/${customerId}`, updatedProfile)
      .then((response) => {
        console.log(response.data);
        // You may also want to update the profile state here if needed
        // setProfile(updatedProfile);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = () => {
    // Send the DELETE request to the backend to delete the customer profile
    axios.delete(`http://localhost:8080/${customerId}`)
      .then((response) => {
        console.log(response.data); // Log success message or handle success as needed
      })
      .catch((error) => {
        console.error(error); // Handle error if needed
      });
      navigate("/log");
  };

  const handleItemClick = (content) => {
    setSelectedContent(content);
  };

  // Update the state when the input fields change
  const handleNameChange = (event) => {
    setUpdateName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUpdateEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setUpdatePhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setUpdateAddress(event.target.value);
  };

  const deleteAc = <div style={{width:'900px'}}>
      <p style={{fontSize:'20px'}}>Are you sure want to delete this account ?</p>
      <button style={{height:'30px' , width:'50px' , marginRight:'30px', backgroundColor:'white' , border:'1px solid black'}} onClick={() => handleItemClick(<Address cust_id={customerId} />)}>NO</button>
      <button style={{height:'30px' , width:'50px' , marginRight:'30px', backgroundColor:'white', border:'1px solid black'}} onClick={handleDelete}>YES</button>
  </div>
  return (
    <div>
      <Navbar />
      <div className='large_profile'>
        <br></br>
        <div className='top_profile'>
          <div>
            <br></br>
            <b>
              <p style={{ fontSize: '25px', fontVariant: 'small-caps', color: 'white' }}>{profile.customer_name}</p>
              <p style={{ color: 'white', float: 'left' }}>{profile.customer_email} </p>
              <p style={{ color: 'white', float: 'right', paddingLeft: '50px' }}>{profile.customer_phone_number}</p><br></br><br></br><br></br>
              <button style={{ height: '35px', width: '120px', backgroundColor: 'rgba(243, 72, 9, 0)', color: 'white', border: '1px solid white' }} onClick={HandleEditProfile}>EDIT PROFILE</button>
            </b>
          </div>
          <div>
            <p><img src="./images/logo_orange.png" style={{ height: '200px', borderRadius: '50%', width: '200px' }} alt="Profile" /></p>
          </div>
        </div>
        <div className='small_profile'>
          <div className='small_pro_left'>
            <b>
              <p onClick={() => handleItemClick(<Address cust_id={customerId} />)}>Address</p><br></br>
              <p onClick={() => handleItemClick(deleteAc)}>Delete</p>
            </b>
          </div>
          <hr></hr>
          <div className='small_pro_right'>
            {selectedContent && <p>{selectedContent}</p>}
          </div>
        </div>
      </div>

      {editProfile &&
        <div className='big_div_pro'>
          <div className='big_div_pro2'>
            <div className='big_div_pro_3'>
              <form className='big_div_pro_4' onSubmit={handleEdit}>
                <div>
                  <img src="./images/close_button.png" style={{ height: '15px', float: 'right' }} onClick={HandleEditProfile} alt="Close" />
                  <br></br>
                </div>
                <div>
                  <b><p>Enter Details to Update</p></b>
                </div>
                <br></br>
                <div>
                  <label>Name </label>
                  <input
                    type='text'
                    style={{ width: '350px', height: '25px', border: '1px solid black' }}
                    value={updateName}
                    onChange={handleNameChange}
                  />
                </div>
                <br></br>
                <div>
                  <label>Email </label>
                  <input
                    type='text'
                    style={{ width: '350px', height: '25px', border: '1px solid black' }}
                    value={updateEmail}
                    onChange={handleEmailChange}
                  />
                </div>
                <br></br>
                <div>
                  <label>Phone Number</label>
                  <input
                    type='text'
                    style={{ width: '350px', height: '25px', border: '1px solid black' }}
                    value={updatePhone}
                    onChange={handlePhoneChange}
                  />
                </div>
                <br></br>
                <div>
                  <label>Address </label>
                  <input
                    type='text'
                    style={{ width: '350px', height: '25px', border: '1px solid black' }}
                    value={updateAddress}
                    onChange={handleAddressChange}
                  />
                </div>
                <br></br>
                <button type='submit' style={{ height: '35px', width: '80px', backgroundColor: 'white', border: '1px solid black' }}>Update</button>
              </form>
            </div>
          </div>
        </div>
      }

    </div>
  );
}

