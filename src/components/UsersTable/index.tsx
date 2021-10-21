/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Thead, Tr, Th, Td, Tbody, ButtonEdit, ButtonRemove } from './styles';
import { USER_STATUS } from '~/utils';

type Props = {
  users: UserType[];
  handleEdit: () => void;
  handleRemove: (event: any) => void;
};

export const UsersTable: React.FC<Props> = ({ users, handleEdit, handleRemove, ...rest }) => {
  return (
    <Container {...rest}>
      <Thead>
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
      </Thead>
      <Tbody>
        {users?.map((item: UserType, idx: number) => (
          <Tr key={idx}>
            <Th scope="row">{idx + 1}</Th>
            <Td>{item.name}</Td>
            <Td>{item.document}</Td>
            <Td>{item.email}</Td>
            <Td>{item.financial_status}</Td>
            <Td>{item.active ? USER_STATUS.ATIVO : USER_STATUS.DESATIVADO}</Td>
            <Td>
              <ButtonEdit onClick={handleEdit}>Editar</ButtonEdit>
            </Td>
            <Td>
              <ButtonRemove onClick={handleRemove} value={item.id}>
                X
              </ButtonRemove>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Container>
  );
};
