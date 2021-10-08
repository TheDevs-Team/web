/* eslint-disable */
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { If } from '~/components';
import { useFormikContext, FormikProps } from '~/utils';
import {
  Container,
  Content,
  CloseContainer,
  Main,
  InputContainer,
  Label,
  Input,
  Btn,
  Select,
  Option,
  Remove,
  TitleRemove,
  OptionRemove,
  RemoveBtn,
} from './styles';

type Props = {
  onClose: () => void;
  onRegister?: boolean;
  onEdit?: boolean;
  onRemove?: boolean;
  handleRemoveUser: () => void;
};

const Modal: React.FC<Props> = ({ onClose, onRegister, onEdit, onRemove, handleRemoveUser }) => {
  const { values, submitForm, handleChange, isValid }: FormikProps<CreateUserType> = useFormikContext();

  return (
    <Container>
      <Content>
        <CloseContainer>
          <AiOutlineClose onClick={onClose} />
        </CloseContainer>
        <Main>
          <If condition={onRegister}>
            <InputContainer>
              <Label>Nome:</Label>
              <Input
                placeholder="Digite o nome do usuário"
                onChange={handleChange('name')}
                name="name"
                value={values.name}
                type="text"
              />
            </InputContainer>
            <InputContainer>
              <Label>Documento:</Label>
              <Input
                placeholder="Digite o documento do usuário"
                onChange={handleChange('document')}
                name="document"
                value={values.document}
                type="text"
              />
            </InputContainer>
            <InputContainer>
              <Label>E-mail:</Label>
              <Input
                onChange={handleChange('email')}
                placeholder="Digite o e-mail do usuário"
                name="email"
                value={values.email}
                type="email"
              />
            </InputContainer>
            <InputContainer>
              <Label>Financeiro:</Label>
              <Select
                onChange={handleChange('financial_status')}
                value={values.financial_status}
                name="financial_status"
              >
                <Option>Status Financeiro</Option>
                <Option>Pago</Option>
                <Option>Aguardando Pagamento</Option>
              </Select>
            </InputContainer>
            <InputContainer>
              <Label>Telefone:</Label>
              <Input
                placeholder="11 99999-9999"
                onChange={handleChange('phone')}
                value={values.phone}
                name="phone"
                type="tel"
              />
            </InputContainer>
            <InputContainer>
              <Label>Tipo:</Label>
              <Select onChange={handleChange('type')} value={values.type} name="type">
                <Option>Escolha o Tipo Do usuario</Option>
                <Option>User</Option>
                <Option>Professor</Option>
                <Option>Adm</Option>
              </Select>
            </InputContainer>
            <Btn type="button" onClick={submitForm}>
              Cadastrar Usuário
            </Btn>
          </If>

          <If condition={onEdit}>
            <InputContainer>
              <Label>Nome:</Label>
              <Input placeholder="Digite o nome do usuário" />
            </InputContainer>
            <InputContainer>
              <Label>Documento:</Label>
              <Input placeholder="Digite o documento do usuário" />
            </InputContainer>
            <InputContainer>
              <Label>E-mail:</Label>
              <Input placeholder="Digite o e-mail do usuário" />
            </InputContainer>
            <InputContainer>
              <Label>Telefone:</Label>
              <Input placeholder="11 99999-9999" />
            </InputContainer>
            <Btn type="button" onClick={submitForm}>
              Atualizar Dados
            </Btn>
          </If>
          <If condition={onRemove}>
            <Remove>
              <TitleRemove>Deseja remover esse Usuário?</TitleRemove>
              <OptionRemove>
                <RemoveBtn onClick={handleRemoveUser}>Sim</RemoveBtn>
                <RemoveBtn>Nao</RemoveBtn>
              </OptionRemove>
            </Remove>
          </If>
        </Main>
      </Content>
    </Container>
  );
};

export default Modal;
