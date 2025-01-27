import React from 'react';
import "../styles/Teamstyle.css";
const teams = [
  {
    id: 'Case 1',
    name: 'Team Alpha',
    members: ['Alice', 'Bob', 'Charlie']
  },
  {
    id: 'Case 2',
    name: 'Team Beta',
    members: ['David', 'Eve', 'Frank']
  }
];

function Teams() {
  return (
    <div className="teams-container">
      <h1>User Teams</h1>
      {teams.map(team => (
        <div key={team.id} className="team">
          <div>
          <h2>{team.id} - {team.name}</h2>
          <p>{team.members.join(' | ')}</p>
          </div>
          <button className="team-button">Shared Data</button>

        </div>
      ))}
    </div>
  );
}

export default Teams;