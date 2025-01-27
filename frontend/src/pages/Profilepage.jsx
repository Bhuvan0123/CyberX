import React from 'react';
import '../styles/Profilestyle.css';
import profilelogo from '../components/profile.jpg';
function ProfilePage() {
  const user = {
    name: 'John Doe',
    designation: 'Security Engineer',
    email: 'john.se@example.com'
  };

  const files = [
    'abc-log',
    'A01 evidence',
    'report-2023',
    'project-plan'
  ];

  return (
    <div className="profile-page">
      <section className="profile-section">
        <div className="profile-image">
          <img src={profilelogo} alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>{user.name}</h2>
          <p>{user.designation}</p>
          <p>{user.email}</p>
        </div>
      </section>
      <section className="files-section">
        <h2>Files Stored</h2>
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ProfilePage;