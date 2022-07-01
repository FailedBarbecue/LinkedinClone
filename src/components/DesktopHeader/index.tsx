import React from 'react';

import { Container, Wrapper, LinkedinIcon, SearchInput, HomeIcon, NotificationsIcon, ProfileCircle, CaretDownIcon } from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
        <Wrapper>
            <div className="left">
            <LinkedinIcon />
            <SearchInput placeholder="Pesquisar" />
            </div>
            <div className="right">
                <nav>
                    <button className="active">
                        <HomeIcon />
                        <span>Início</span>
                    </button>
                    <button>
                        <NotificationsIcon />
                        <span>Notificações</span>
                    </button>
                    <button>
                        <ProfileCircle src="https://pbs.twimg.com/profile_images/1463558011901952004/7sCVNSrO_400x400.jpg"/>
                    <span>
                        Eu <CaretDownIcon />
                    </span>
                    </button>
                </nav>
            </div>
        </Wrapper>
    </Container>
  )
}

export default DesktopHeader;