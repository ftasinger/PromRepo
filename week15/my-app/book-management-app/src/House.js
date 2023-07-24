import React, { useState, useEffect } from 'react';
import axios from 'axios';

const House = () => {
  const [houses, setHouses] = useState([]);
  const [newHouseData, setNewHouseData] = useState({ name: '', location: '', price: '' });
  const [editingHouse, setEditingHouse] = useState(null);

  const apiUrl = 'https://64a106e40079ce56e2dac1a4.mockapi.io/houses';

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      const response = await axios.get(apiUrl);
      setHouses(response.data);
    } catch (error) {
      console.error('Error fetching houses:', error);
    }
  };

  const handleCreateHouse = async () => {
    try {
      const response = await axios.post(apiUrl, newHouseData);
      setHouses([...houses, response.data]);
      setNewHouseData({ name: '', location: '', price: '' });
    } catch (error) {
      console.error('Error creating house:', error);
    }
  };

  const handleUpdateHouse = async (house) => {
    try {
      await axios.put(`${apiUrl}/${house.id}`, house);
      setEditingHouse(null);
      setHouses((prevHouses) =>
        prevHouses.map((prevHouse) => (prevHouse.id === house.id ? house : prevHouse))
      );
    } catch (error) {
      console.error('Error updating house:', error);
    }
  };

  const handleDeleteHouse = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setHouses(houses.filter((house) => house.id !== id));
    } catch (error) {
      console.error('Error deleting house:', error);
    }
  };

  const handleEditHouse = (house) => {
    setEditingHouse(house);
  };

  const handleCancelEdit = () => {
    setEditingHouse(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewHouseData({ ...newHouseData, [name]: value });
  };

  return (
    <div>
      <h1>Houses</h1>

      <div>
        <h2>Create New House</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newHouseData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={newHouseData.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={newHouseData.price}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateHouse}>Create</button>
      </div>

      <div>
        <h2>List of Houses</h2>
        <ul>
          {houses.map((house) => (
            <li key={house.id}>
              {editingHouse === house ? (
                <>
                  <input
                    type="text"
                    value={house.name}
                    onChange={(e) => handleUpdateHouse({ ...house, name: e.target.value })}
                  />
                  <input
                    type="text"
                    value={house.location}
                    onChange={(e) => handleUpdateHouse({ ...house, location: e.target.value })}
                  />
                  <input
                    type="text"
                    value={house.price}
                    onChange={(e) => handleUpdateHouse({ ...house, price: e.target.value })}
                  />
                  <button onClick={() => handleUpdateHouse(house)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <span>{house.name}</span>
                  <span>{house.location}</span>
                  <span>{house.price}</span>
                  <button onClick={() => handleEditHouse(house)}>Edit</button>
                  <button onClick={() => handleDeleteHouse(house.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default House;

