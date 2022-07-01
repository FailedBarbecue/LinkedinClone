import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
        <ProfileCircle src="https://pbs.twimg.com/profile_images/1463558011901952004/7sCVNSrO_400x400.jpg" />
        <SearchInput placeholder="Pesquisar"/>
        <MessageIcon />
    </Container>
  )
}

export default MobileHeader;