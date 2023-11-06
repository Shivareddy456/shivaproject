import React, { useState } from 'react';
import axios from 'axios';

function Participants() {
  const [participantCode, setParticipantCode] = useState('');
  const [participantNames, setParticipantNames] = useState([]);
  const [newParticipantName, setNewParticipantName] = useState('');
  const [newParticipantId, setNewParticipantId] = useState('');
  const [newParticipantPhoneNumber, setNewParticipantPhoneNumber] = useState('');

  const handleInputChange = (e) => {
    setParticipantCode(e.target.value);
  };

  const handleNameInputChange = (e) => {
    setNewParticipantName(e.target.value);
  };

  const handleIdInputChange = (e) => {
    setNewParticipantId(e.target.value);
  };

  const handlePhoneNumberInputChange = (e) => {
    setNewParticipantPhoneNumber(e.target.value);
  };

  const handleAddParticipant = () => {
    if (newParticipantName.trim() !== '' && newParticipantId.trim() !== '' && newParticipantPhoneNumber.trim() !== '') {
      const newParticipant = {
        name: newParticipantName,
        id: newParticipantId,
        phoneNumber: newParticipantPhoneNumber,
      };
      setParticipantNames([...participantNames, newParticipant]);
      setNewParticipantName('');
      setNewParticipantId('');
      setNewParticipantPhoneNumber('');
    } else {
      console.log('Invalid input. Please enter name, ID, and phone number.');
    }
  };

  const handleDeleteParticipant = async (index) => {
    const updatedParticipants = [...participantNames];
    updatedParticipants.splice(index, 1);
    setParticipantNames(updatedParticipants);
    try {
      // Send a DELETE request to delete data from the database for the corresponding participant
      await axios.delete(`YOUR_API_ENDPOINT/${index}`);
      console.log('Data deleted successfully.');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className='participants-container'>
      <h2>Participants Page</h2>
      <div>
        <h3>Participant Names:</h3>
        <ul>
          {participantNames.map((participant, index) => (
            <li key={index}>
              <strong>Name:</strong> {participant.name}, <strong>ID:</strong> {participant.id}, <strong>Phone Number:</strong> {participant.phoneNumber}
              <button onClick={() => handleDeleteParticipant(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <label>
          Name:
          <input
            type='text'
            value={newParticipantName}
            onChange={handleNameInputChange}
            placeholder='Enter name'
          />
        </label>
        <br></br>
        <label>
          ID:
          <input
            type='text'
            value={newParticipantId}
            onChange={handleIdInputChange}
            placeholder='Enter ID'
          />
        </label>
        <br></br>
        <label>
          Phone Number:
          <input
            type='text'
            value={newParticipantPhoneNumber}
            onChange={handlePhoneNumberInputChange}
            placeholder='Enter phone number'
          />
        </label>
        <br></br>
        <button onClick={handleAddParticipant}>Add Participant</button>
      </div>
    </div>
  );
}

export default Participants;
