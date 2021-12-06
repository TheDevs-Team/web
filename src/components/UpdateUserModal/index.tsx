import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { UserStore } from '~/store';
import { getOtherUserData, notify } from '~/utils';
import { Modal, Container, Content, ButtonStyled, Input, Form, Span, Alert, Close, CloseWrapper } from './styles';

type Props = {
  user?: UserStore;
  onClose: () => void;
  onConfirm: () => void;
};

const UpdateUserModal: React.FC<Props> = ({ user, onClose, onConfirm, ...rest }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [financial_status, setFinancialStatus] = useState('');

  const state: any = {
    name,
    phone,
    password,
    confirm_password,
    financial_status,
  };

  const submitForm = async (state: any) => {
    const response = await user?.update({
      ...state,
      id: user.current,
    });

    if (response) {
      notify('success', 'Sucesso ao atualizar usuário!');
      return window.location.reload();
    }

    return notify('error', 'Erro ao atualizar usuário!');
  };

  const data = getOtherUserData();

  return (
    <Container {...rest}>
      <Modal>
        <CloseWrapper>
          <Close onClick={onClose} />
        </CloseWrapper>
        <Form>
          <Span>Editar Usuário</Span>
          <Alert>OBS: Preencha todos os campos!</Alert>
          <Input
            id="name"
            label="Nome"
            variant="filled"
            color={'success'}
            helperText={'Ex: Eduardo Alves Zuppo'}
            value={data.name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <Input
            id="phone"
            label="Telefone"
            variant="filled"
            color={'success'}
            value={data.phone}
            helperText={'Ex: 11963851702'}
            onChange={(e: any) => setPhone(e.target.value)}
          />
          <Input
            id="financial_status"
            variant="filled"
            color={'success'}
            label="Status do Pagamento"
            helperText={'PAID | WAITING_PAYMENT'}
            value={data.financial_status}
            onChange={(e: any) => setFinancialStatus(e.target.value.toUpperCase())}
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            variant="filled"
            color={'success'}
            helperText={'Utilize senha com caracteres especiais'}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Input
            id="password-confirm"
            label="Confirmar Senha"
            type="password"
            variant="filled"
            color={'success'}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />
        </Form>
        <Content>
          <ButtonStyled cancel onClick={() => submitForm(state)}>
            Confirmar
          </ButtonStyled>
        </Content>
      </Modal>
    </Container>
  );
};

export default inject('user')(observer(UpdateUserModal));
