import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://pbs.twimg.com/profile_images/1529527307798564877/BOSIXZvj_400x400.jpg" alt="Rocketseat" />
          <Column>
            <h3>NOir desires</h3>
            <h4>@Vitorsempai</h4>
            <time>10 min</time>
          </Column>
        </Row>

        <PostImage
          src="https://pbs.twimg.com/media/EODoimVWoAEMKuo?format=jpg&name=medium"
          alt="Vitor trolhos"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
