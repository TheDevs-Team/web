import React from 'react';
import { If } from '../If';

import {
  Container,
  ContentAvatar,
  ContentName,
  ContentOptions,
  UserName,
  BackgroundIcon,
  UserIcon,
  EditIcon,
  AddIcon,
  DeleteIcon,
} from './styles';

type Props = {
  name: string;
  remove?: () => void;
  update?: () => void;
  add?: () => void;
  showEdit?: boolean;
  showDelete?: boolean;
  showAdd?: boolean;
};

export const UsersCard: React.FC<Props> = ({ name, remove, update, add, showEdit, showDelete, showAdd, ...rest }) => (
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
      <If condition={showEdit}>
        <EditIcon onClick={update} />
      </If>
      <If condition={showDelete}>
        <DeleteIcon onClick={remove} />
      </If>
      <If condition={showAdd}>
        <AddIcon onClick={add} />
      </If>
    </ContentOptions>
  </Container>
);
