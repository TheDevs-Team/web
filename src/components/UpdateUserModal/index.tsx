import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { UserStore } from '~/store';
import { getOtherUserData, notify } from '~/utils';
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

const UpdateUserModal: React.FC<Props> = ({ user, onClose, onConfirm, ...rest }) => {
  const data = getOtherUserData();

  const [dataUser, setDataUser] = useState({
    name: data.name,
    phone: data.phone,
    password: '',
    confirm_password: '',
    financial_status: data.financial_status,
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setDataUser((old) => ({ ...old, [name]: value }));
  };

  const submitForm = async () => {
    const response = await user?.update({ ...dataUser, id: user?.current });
    if (response) {
      notify('success', 'Sucesso ao atualizar dados!');
      return window.location.reload();
    }
    return notify('error', 'Erro ao atualizar dados!');
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
            name="name"
            label="Nome"
            variant="filled"
            color={'success'}
            helperText={'Ex: Eduardo Alves Zuppo'}
            value={dataUser.name}
            onChange={handleChange}
          />
          <Input
            name="phone"
            id="phone"
            label="Telefone"
            variant="filled"
            color={'success'}
            value={dataUser.phone}
            helperText={'Ex: 11963851702'}
            onChange={handleChange}
          />
          <SelectStyled
            name="financial_status"
            labelId="financial_status-label"
            id="financial_status"
            variant="filled"
            color={'success'}
            placeholder="Status do Pagamento"
            value={dataUser.financial_status}
            onChange={handleChange}
          >
            <SelectItem value="PAID">Pago</SelectItem>
            <SelectItem value="WAITING_PAYMENT">Aguardando Pagamento</SelectItem>
          </SelectStyled>
          <Input
            id="password"
            name="password"
            label="Senha"
            type="password"
            variant="filled"
            color={'success'}
            helperText={'Utilize senha com caracteres especiais'}
            onChange={handleChange}
          />
          <Input
            id="confirm_password"
            name="confirm_password"
            label="Confirmar Senha"
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

export default inject('user')(observer(UpdateUserModal));
