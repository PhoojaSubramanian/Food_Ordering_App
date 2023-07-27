import React, { useState } from 'react';
import './AdminRestaurantOwner.css'
import AdminNavbar from './AdminNavbar';
const AdminRestaurantOwner = () => {
  // Sample initial data for restaurant owners
  const initialOwners = [
    { id: 1, name: 'Sweatha', email: 'sweatha@example.com', restaurant: 'Pizza Place' },
    { id: 2, name: 'Sindhu', email: 'sindhu@example.com', restaurant: 'Burger Joint' },
    { id: 3, name: 'Regma', email: 'regma@example.com', restaurant: 'Burger Joint' }
  ];

  const [owners, setOwners] = useState(initialOwners);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState(null);

  const handleAddClick = () => {
    setShowAddForm(true);
    setSelectedOwner(null);
  };

  const handleUpdateClick = (owner) => {
    setShowAddForm(false);
    setSelectedOwner(owner);
  };

  const handleAddOrUpdateOwner = (formData) => {
    if (selectedOwner) {
      // Update existing owner
      const updatedOwners = owners.map((owner) =>
        owner.id === selectedOwner.id ? { ...owner, ...formData } : owner
      );
      setOwners(updatedOwners);
    } else {
      // Add new owner
      const newOwner = {
        id: owners.length + 1,
        ...formData,
      };
      setOwners([...owners, newOwner]);
    }
    setSelectedOwner(null);
    setShowAddForm(false);
  };

  return (
    <div>
      {!showAddForm && (
        <OwnerList owners={owners} onAddClick={handleAddClick} onUpdateClick={handleUpdateClick} />
      )}
      {showAddForm && <AddOwnerForm onSubmit={handleAddOrUpdateOwner} />}
      {selectedOwner && (
        <UpdateOwnerForm owner={selectedOwner} onUpdate={handleAddOrUpdateOwner} />
      )}
    </div>
  );
};

const OwnerList = ({ owners, onAddClick, onUpdateClick }) => {
  return (
    <div>
    <AdminNavbar/>
    <div className="owner-list-container">

      <h1>Restaurant Owners</h1>
      <ul>
      <button onClick={onAddClick} className="add-owner-btn">Add Owner</button>
      <br></br>
        {owners.map((owner) => (
          <li key={owner.id} className="owner-item">
            <p>Name: {owner.name}</p>
            <p>Email: {owner.email}</p>
            <p>Restaurant: {owner.restaurant}</p>
            <button onClick={() => onUpdateClick(owner)} style={{height:'30px'}}>Update</button>
          </li>
        ))}
      </ul>
      
    </div>
    </div>
  );
};

const AddOwnerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({ name: '', email: '', restaurant: '' });
  };

  return (
    <div>
      <h2>Add New Owner</h2>
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Owner Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="restaurant"
          value={formData.restaurant}
          onChange={handleInputChange}
          placeholder="Restaurant Name"
        />
        <button type="button" onClick={handleSubmit}>
          Add Owner
        </button>
      </form>
    </div>
  );
};

const UpdateOwnerForm = ({ owner, onUpdate }) => {
  const [formData, setFormData] = useState({ ...owner });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onUpdate(formData);
  };

  return (
    <div className='updateowner'>
      <h2>Update Owner</h2>
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Owner Name"
        />
        <br></br>
        <br></br>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="restaurant"
          value={formData.restaurant}
          onChange={handleInputChange}
          placeholder="Restaurant Name"
        />
        <br></br>
        <br></br>
        <button type="button" onClick={handleSubmit}>
          Update Owner
        </button>
      </form>
    </div>
  );
};

export default AdminRestaurantOwner;
