import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { UserStore } from '~/store';
import { notify, USER_STATUS_FINANCEIRO } from '~/utils';
import {
  Modal,
  Container,
  Content,
  ButtonStyled,
  Input,
  Form,
  Span,
  Alert,
  Close,
  CloseWrapper,
  SelectStyled,
  SelectItem,
} from './styles';

type Props = {
  user?: UserStore;
  onClose: () => void;
  onConfirm: () => void;
};

const CreateUserModal: React.FC<Props> = ({ user, onClose, onConfirm, ...rest }) => {
  const [dataUser, setDataUser] = useState({
    type: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
    financial_status: '',
    document: '',
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setDataUser((old) => ({ ...old, [name]: value }));
  };

  const submitForm = async () => {
    const response = await user?.create(dataUser);
    if (response) {
      notify('success', 'Sucesso ao criar usuário!');
      return window.location.reload();
    }
    return notify('error', 'Erro ao criar usuário!');
  };

  return (
    <Container {...rest}>
      <Modal>
        <CloseWrapper>
          <Close onClick={onClose} />
        </CloseWrapper>
        <Form>
          <Span>Criar Usuário</Span>
          <Alert>OBS: Preencha todos os campos!</Alert>
          <Input
            id="name"
            name="name"
            label="Nome"
            variant="filled"
            color={'success'}
            helperText={'Ex: Eduardo Alves Zuppo'}
            onChange={handleChange}
          />
          <Input
            id="email"
            name="email"
            label="Email"
            variant="filled"
            color={'success'}
            helperText={'Ex: user@email.com'}
            onChange={handleChange}
          />
          <Input
            id="phone"
            name="phone"
            label="Telefone"
            variant="filled"
            color={'success'}
            helperText={'Ex: 11963851702'}
            onChange={handleChange}
          />
          <SelectStyled
            id="financial_status"
            name="financial_status"
            color={'success'}
            variant="filled"
            placeholder="Status do Pagamento"
            value={dataUser.financial_status}
            onChange={handleChange}
          >
            <SelectItem value="PAID">Pago</SelectItem>
            <SelectItem value="WAITING_PAYMENT">Aguardando Pagamento</SelectItem>
          </SelectStyled>

          <SelectStyled
            id="type"
            name="type"
            variant="filled"
            color={'success'}
            value={dataUser.type}
            onChange={handleChange}
          >
            <SelectItem value="ADMIN">Administrador</SelectItem>
            <SelectItem value="USER">Usuário</SelectItem>
          </SelectStyled>

          <Input
            id="document"
            label="Documente"
            variant="filled"
            name="document"
            color={'success'}
            helperText={'52302900804'}
            onChange={handleChange}
          />
          <Input
            id="password"
            label="Senha"
            name="password"
            type="password"
            variant="filled"
            color={'success'}
            helperText={'Utilize senha com caracteres especiais'}
            onChange={handleChange}
          />
          <Input
            id="password-confirm"
            label="Confirmar Senha"
            name="confirm_password"
            type="password"
            variant="filled"
            color={'success'}
            onChange={handleChange}
          />
        </Form>
        <Content>
          <ButtonStyled cancel onClick={submitForm}>
            Confirmar
          </ButtonStyled>
        </Content>
      </Modal>
    </Container>
  );
};

export default inject('user')(observer(CreateUserModal));
