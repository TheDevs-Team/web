import React from 'react';

import {
  Container,
  ContentAvatar,
  ContentName,
  ContentOptions,
  UserName,
  BackgroundIcon,
  UserIcon,
  EditIcon,
  DeleteIcon,
} from './styles';

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
    <ContentOptions>
      <EditIcon />
      <DeleteIcon />
    </ContentOptions>
  </Container>
);
