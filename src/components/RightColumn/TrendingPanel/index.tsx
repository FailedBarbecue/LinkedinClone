import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Dudu Fastfingers best yasuo BR</span>
              <span className="subtext">há 1 d • 1031230 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Dudu Fastfingers best Zed BR</span>
              <span className="subtext">há 1 d • 5713 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Dudu Fastfingers best Talon BR</span>
              <span className="subtext">há 1 d • 32134 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Dudu Fastfingers best Fizz BR</span>
              <span className="subtext">há 1 d • 871 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Dudu Fastfingers best Katarina BR</span>
              <span className="subtext">há 1 d • 561 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Dudu Fastfingers best Ekko BR</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
