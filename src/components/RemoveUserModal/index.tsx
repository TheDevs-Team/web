import React from 'react';

import { Modal, Container, Content, ButtonStyled, Text } from './styles';

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};

export const RemoveUserModal: React.FC<Props> = ({ onClose, onConfirm, ...rest }) => {
  return (
    <Container {...rest}>
      <Modal>
        <Text>Tem certeza que deseja remover este usuário?</Text>
        <Content>
          <ButtonStyled onClick={onClose}>Cancelar</ButtonStyled>
          <ButtonStyled cancel onClick={onConfirm}>
            Remover
          </ButtonStyled>
        </Content>
      </Modal>
    </Container>
  );
};
