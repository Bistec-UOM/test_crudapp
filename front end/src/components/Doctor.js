import React, { useState } from 'react';

const Home = () => {
  const [newItem, setNewItem] = useState('');

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Add a patient ........"
          style={{
            padding: '8px',
            marginRight: '10px',
            width: '780px',
            textAlign: 'center',
            fontSize: '20px',
          }}
        />
        <button
          id="button1"
          style={{
            padding: '8px 15px',
            cursor: 'pointer',
            color: 'rgb(220, 220, 224)',
            backgroundColor: 'rgb(21, 77, 47)',
            width: '100px',
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

const Employees = () => {
  const [data, setData] = useState([
    { Name: 'Nethmi Eranga Wijeweera', Age: '23', Gender: 'Female', telephone_No: '0775294974' },
    { Name: 'Dammika Mahendra', Age: '23', Gender: 'Male', telephone_No: '0775294974' },
    { Name: 'Chathumini Wanasighe', Age: '23', Gender: 'Female', telephone_No: '0775294974' },
  ]);

  return (
    <div>
      <table
        style={{
          width: '800px',
          height: '30px',
          textAlign: 'center',
          backgroundColor: 'rgb(141, 181, 223)',
          color: 'rgb(12, 11, 11)',
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Telephone_No</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.Name}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Gender}</td>
              <td>{item.telephone_No}</td>
              <td>
                <button
                  id="button1"
                  style={{
                    padding: '8px 15px',
                    cursor: 'pointer',
                    color: 'rgb(220, 220, 224)',
                    backgroundColor: 'rgb(21, 77, 47)',
                    width: '100px',
                  }}
                >
                  Edit
                </button>
                <button
                  id="button2"
                  style={{
                    padding: '8px 15px',
                    cursor: 'pointer',
                    color: 'rgb(13, 13, 13)',
                    backgroundColor: 'rgb(244, 9, 9)',
                    width: '100px',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function Doctor() {
  return (
    <div className="App">
      <h1>Add Patients</h1>
     <br></br>
      <Home />
      <br />
      <Employees />
    </div>
  );
}

export default Doctor;