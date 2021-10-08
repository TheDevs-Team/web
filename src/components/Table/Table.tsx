import React, { useState } from 'react';
import { Modal, If } from '~/components';
import { Container, Thead, Tr, Th, Td, Tbody, ButtonEdit, ButtonRemove, ButtonCreate } from './styles';
import { USER_STATUS, USER_STATUS_FINANCEIRO } from '~/utils';
import { inject, observer } from 'mobx-react';
import { UserStore } from '~/store';

type Props = {
  users?: UserType[];
  userTable?: boolean;
  materialTable?: boolean;
  courseTable?: boolean;
  user?: UserStore;
};

const Table: React.FC<Props> = ({ users, userTable, courseTable, materialTable, user }) => {
  const [modal, setModal] = useState(false);
  const [register, setRegister] = useState(false);
  const [remove, setRemove] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <>
      <If condition={register}> {modal && <Modal onRegister onClose={() => setModal(false)} />}</If>
      <If condition={edit}> {modal && <Modal onEdit onClose={() => setModal(false)} />}</If>
      <If condition={remove}> {modal && <Modal onRemove onClose={() => setModal(false)} />}</If>
      <Container>
        <Thead>
          <If condition={userTable}>
            <Tr>
              <Th>Usuários</Th>
              <Th scope="row">Nome</Th>
              <Th scope="row">Documento</Th>
              <Th scope="row">E-mail</Th>
              <Th scope="row">Financeiro</Th>
              <Th scope="row">Status</Th>
              <Th scope="row">Ações</Th>
              <Th scope="row"></Th>
            </Tr>
          </If>
          <If condition={courseTable}>
            <Tr>
              <Th>Cursos</Th>
              <Th scope="row">Nome</Th>
              <Th scope="row">Descrição</Th>
              <Th scope="row">Status</Th>
              <Th scope="row"></Th>
              <Th scope="row">
                <ButtonCreate
                  onClick={() => {
                    setModal(true);
                    setRemove(false);
                    setEdit(false);
                    setRegister(true);
                  }}
                >
                  Adicionar
                </ButtonCreate>
              </Th>
            </Tr>
          </If>
          <If condition={materialTable}>
            <Tr>
              <Th>Materiais</Th>
              <Th scope="row">Nome</Th>
              <Th scope="row">Tipo</Th>
              <Th scope="row">Arquivo</Th>
              <Th scope="row"></Th>
              <Th scope="row">
                <ButtonCreate
                  onClick={() => {
                    setModal(true);
                    setRemove(false);
                    setEdit(false);
                    setRegister(true);
                  }}
                >
                  Adicionar
                </ButtonCreate>
              </Th>
            </Tr>
          </If>
        </Thead>
        <Tbody>
          <If condition={userTable}>
            {users?.map((item: UserType, idx: number) => (
              <Tr key={idx}>
                <Th scope="row">{idx + 1}</Th>
                <Td>{item.name}</Td>
                <Td>{item.document}</Td>
                <Td>{item.email}</Td>
                <Td>
                  {item.financial_status === 'PAID'
                    ? USER_STATUS_FINANCEIRO.PAGO
                    : USER_STATUS_FINANCEIRO.AGUARDANDO_PAGAMENTO}
                </Td>
                <Td>{item.active ? USER_STATUS.ATIVO : USER_STATUS.DESATIVADO}</Td>
                <Td>
                  <ButtonEdit
                    onClick={() => {
                      setModal(true);
                      setRemove(false);
                      setEdit(true);
                      setRegister(false);
                    }}
                  >
                    Editar
                  </ButtonEdit>
                </Td>
                <Td>
                  <ButtonRemove
                    onClick={() => {
                      setModal(true);
                      setRemove(true);
                      setEdit(false);
                      setRegister(false);
                      user?.setCurrent(item);
                    }}
                  >
                    X
                  </ButtonRemove>
                </Td>
              </Tr>
            ))}
          </If>
          <If condition={courseTable}>Salve</If>
          <If condition={materialTable}>Salve2</If>
        </Tbody>
      </Container>
    </>
  );
};

export default inject('user')(observer(Table));
