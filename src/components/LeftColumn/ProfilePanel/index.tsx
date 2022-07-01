import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://pbs.twimg.com/profile_images/1463558011901952004/7sCVNSrO_400x400.jpg"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Dudu FastFingers</h1>
        <h2>Dedos Muitos Rápidos</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
