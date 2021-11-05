import React from 'react';
import { UserStore } from '~/store';

import { Modal, Container, Content, ButtonStyled, Text } from './styles';

type Props = {
  user?: UserStore;
};

export const RemoveUserModal: React.FC<Props> = ({ user, ...rest }) => {
  const removeCurrent = async () => user?.setCurrent('');
  const removeUser = async () => await user?.deleteCurrent();

  return (
    <Container {...rest}>
      <Modal>
        <Text>Tem certeza que deseja remover este usuário?</Text>
        <Content>
          <ButtonStyled onClick={() => console.log('clicou')}>Cancelar</ButtonStyled>
          <ButtonStyled
            cancel
            onClick={() => {
              removeUser();
              console.log('clicou');
            }}
          >
            Remover
          </ButtonStyled>
        </Content>
      </Modal>
    </Container>
  );
};
