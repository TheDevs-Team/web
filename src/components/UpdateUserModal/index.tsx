import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { UserStore } from '~/store';
import { notify } from '~/utils';
import { Modal, Container, Content, ButtonStyled, Input, Form, Span, Alert, Close, CloseWrapper } from './styles';

type Props = {
  user?: UserStore;
  onClose: () => void;
  onConfirm: () => void;
};

const UpdateUserModal: React.FC<Props> = ({ user, onClose, onConfirm, ...rest }) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [typeUser, setTypeUser] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [financial_status, setFinancialStatus] = useState('');

  const state: any = {
    name,
    email,
    phone,
    password,
    typeUser,
    document,
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
      return history.push('/');
    }

    return notify('error', 'Erro ao atualizar usuário!');
  };

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
            onChange={(e: any) => setName(e.target.value)}
          />
          <Input
            id="email"
            label="Email"
            variant="filled"
            color={'success'}
            helperText={'Ex: user@email.com'}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            id="phone"
            label="Telefone"
            variant="filled"
            color={'success'}
            helperText={'Ex: 11963851702'}
            onChange={(e: any) => setPhone(e.target.value)}
          />
          <Input
            id="type"
            label="Tipo do Usuário"
            variant="filled"
            color={'success'}
            helperText={'ADMIN | USER'}
            onChange={(e: any) => setTypeUser(e.target.value)}
          />
          <Input
            id="financial_status"
            variant="filled"
            color={'success'}
            label="Status do Pagamento"
            helperText={'PAID | WAITING_PAYMENT'}
            onChange={(e: any) => setFinancialStatus(e.target.value.toUpperCase())}
          />
          <Input
            id="document"
            label="Documente"
            variant="filled"
            color={'success'}
            helperText={'52302900804'}
            onChange={(e: any) => setDocument(e.target.value)}
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
