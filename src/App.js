import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Team from './components/Team';
import Data from './components/Data.js';

function App() {
  
  const [teamMembers, setTeamMembers] = useState(Data)

    const ourTeam = (member) => {

      const newMember = {

        name: member.name,
        email: member.email,
        role: member.role,
        favFood: member.favFood
      }

      setTeamMembers([...teamMembers,newMember])}

  return (

    <div>

        <div className="header">
          <h1> Our Team</h1>
        </div>

        <div className="App">
         <Team members={teamMembers}/>
        </div>

        <div className="Forms">
        <h2> Want to join our team?</h2>
        <Form modifyTeam={ourTeam} />
        </div>

    </div>
  );
}

export default App;
