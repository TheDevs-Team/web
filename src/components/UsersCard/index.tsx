import React from 'react';

import { Container, ContentAvatar, ContentName, ContentOptions, UserName, BackgroundIcon, UserIcon } from './styles';

type Props = {
  name: string;
};

export const UsersCard: React.FC<Props> = ({ name, ...rest }) => (
  <Container {...rest}>
    <ContentAvatar>
      <BackgroundIcon>
        <UserIcon />
      </BackgroundIcon>
    </ContentAvatar>
    <ContentName>
      <UserName>{name}</UserName>
    </ContentName>
    <ContentOptions />
  </Container>
);
