import React, { useState } from 'react';
import { Modal } from '../../components';
import { If } from '../If';

import { Container, Thead, Tr, Th, Td, Tbody, ButtonEdit, ButtonRemove, ButtonCreate } from './styles';

type Props = {
  users?: UserType[];
};

export const Table: React.FC<Props> = ({ users }) => {
  const [modal, setModal] = useState(false);
  const [register, setRegister] = useState(false);
  const [remove, setRemove] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <>
      <If condition={register === true}> {modal && <Modal onRegister={true} onClose={() => setModal(false)} />}</If>
      <If condition={edit === true}> {modal && <Modal onEdit={true} onClose={() => setModal(false)} />}</If>
      <If condition={remove === true}> {modal && <Modal onRemove={true} onClose={() => setModal(false)} />}</If>
      <Container>
        <Thead>
          <Tr>
            <Th>Usuários</Th>
            <Th scope="row">Nome</Th>
            <Th scope="row">Documento</Th>
            <Th scope="row">E-mail</Th>
            <Th scope="row">Financeiro</Th>
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
        </Thead>
        <Tbody>
          {users?.map((user: UserType, idx: number) => (
            <Tr key={idx}>
              <Th scope="row">{idx + 1}</Th>
              <Td>{user.name}</Td>
              <Td>{user.document}</Td>
              <Td>{user.email}</Td>
              <Td>{user.financial_status}</Td>
              <Td>{user.active}</Td>
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
                  }}
                >
                  X
                </ButtonRemove>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Container>
    </>
  );
};
