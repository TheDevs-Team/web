import React from 'react';
import { If } from '..';

import { Modal, Container, Content, ButtonStyled, Text } from './styles';

type Props = {
  onClose: () => void;
  onConfirm: () => void;
  addUser?: boolean;
};

export const RemoveUserModal: React.FC<Props> = ({ onClose, onConfirm, addUser = false, ...rest }) => {
  return (
    <Container {...rest}>
      <Modal>
        <If condition={!addUser}>
          <Text>Tem certeza que deseja remover este usuário?</Text>
          <Content>
            <ButtonStyled onClick={onClose}>Cancelar</ButtonStyled>
            <ButtonStyled cancel onClick={onConfirm}>
              Remover
            </ButtonStyled>
          </Content>
        </If>
        <If condition={addUser}>
          <Text>Tem certeza que deseja adicionar este usuário?</Text>
          <Content>
            <ButtonStyled onClick={onClose}>Cancelar</ButtonStyled>
            <ButtonStyled confirm onClick={onConfirm}>
              Confirmar
            </ButtonStyled>
          </Content>
        </If>
      </Modal>
    </Container>
  );
};
