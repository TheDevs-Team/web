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
  remove: () => void;
  update: () => void;
};

export const UsersCard: React.FC<Props> = ({ name, remove, update, ...rest }) => (
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
      <EditIcon onClick={update} />
      <DeleteIcon onClick={remove} />
    </ContentOptions>
  </Container>
);
