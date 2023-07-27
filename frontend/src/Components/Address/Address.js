import React , {useState,useEffect} from 'react'
import axios from 'axios';
import './Address.css'
export default function Address({cust_id}) {

    const[edit,setEdit] = useState(false);
    const customerId = cust_id;
    const [profile, setProfile] = useState(null);
    const[address,setAddress] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8080/${customerId}`)
          .then((response) => {
            console.log(customerId);
            setProfile(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [customerId]);

      if (!profile) {
        return <div>Loading...</div>;
      }
      const handleUpdateAddress = () => {
        const updatedProfile = {
          customer_id: customerId,
          customer_name :profile.customer_name,
          password: profile.password,
          customer_email: profile.customer_email,
          customer_phone_number: profile.customer_phone_number,
          customer_address: address,
          customer_image: profile.customer_image
        };
        axios.put(`http://localhost:8080/edit/${customerId}`, updatedProfile)
          .then((response) => {
            console.log(address)
            console.log(response.data); 
          })
          .catch((error) => {
            console.error(error); 
          });
      };


      const HandleEdit =()=>
      {
        setEdit(!edit);
      }

  return (
    <div>
        <b><p style={{fontSize:'larger'}}>Manage Address</p></b>
        <div style={{height:'200px' , width:'900px' ,  float:'left'}}>
            <div style={{border:'1px solid black', width:'400px' , padding:'10px'}}>
            <br></br>
            <img src="./images/address.png" style={{height:'30px'}}></img> 
            <p>{profile.customer_address}</p>
            <button style={{height:'25px' , backgroundColor:'white' , color:'orangered' , border:'none'}} onClick={HandleEdit}>EDIT</button>

            </div>
        </div>
        <div>
        {edit && 
            <div className='big_div'>
              <div className='big_div2'>
                {/* <center> */}
                  <div className='big_div_3'>
                  <form onSubmit={handleUpdateAddress} className='big_div_4'>
                    <div>
                      <img src="./images/close_button.png" style={{height:'15px' , float:'right'}} onClick={HandleEdit}></img>
                      <br></br>
                    </div>
                    <div>
                      <b><p>Enter Address to Update</p></b>
                    </div>
                    <br></br>
                    <div>
                      <input type='text' style={{width:'350px' , height:'25px' , border:'1px solid black'}} onChange={e=>setAddress(e.target.value)}></input>
                    </div>
                    <br></br>
                    <button type='submit' style={{height:'35px', width:'80px' , backgroundColor:'white' , border:'1px solid black'}}>Update</button>
                  </form>
                  </div>
                {/* </center> */}
              </div>
            </div>
        }
        </div>
    </div>
  )
}
