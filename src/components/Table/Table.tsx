import React from 'react';

import { Container, Thead, Tr, Th, Td, Tbody, ButtonEdit, ButtonRemove } from './styles';

type Props = {
  users?: UserType[];
};

export const Table: React.FC<Props> = ({ users }) => {
  return (
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
          <Th scope="row"></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users?.map((user: UserType, idx: number) => (
          <Tr key={idx}>
            <Th scope="row">1</Th>
            <Td>{user.name}</Td>
            <Td>{user.document}</Td>
            <Td>{user.email}</Td>
            <Td>{user.financial_status}</Td>
            <Td>{user.active}</Td>
            <Td>
              <ButtonEdit>Editar</ButtonEdit>
            </Td>
            <Td>
              <ButtonRemove>X</ButtonRemove>
            </Td>
          </Tr>
        ))}
        {/* <Tr>
          <Th scope="row">1</Th>
          <Td>Eduardo Alves Zuppo</Td>
          <Td>523.029.008-04</Td>
          <Td>zuppo.edu@gmail.com</Td>
          <Td>Pago</Td>
          <Td>Ativo</Td>
          <Td>
            <ButtonEdit>Editar</ButtonEdit>
          </Td>
          <Td>
            <ButtonRemove>X</ButtonRemove>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">1</Th>
          <Td>Eduardo Alves Zuppo</Td>
          <Td>523.029.008-04</Td>
          <Td>zuppo.edu@gmail.com</Td>
          <Td>Pago</Td>
          <Td>Ativo</Td>
          <Td>
            <ButtonEdit>Editar</ButtonEdit>
          </Td>
          <Td>
            <ButtonRemove>X</ButtonRemove>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">1</Th>
          <Td>Eduardo Alves Zuppo</Td>
          <Td>523.029.008-04</Td>
          <Td>zuppo.edu@gmail.com</Td>
          <Td>Pago</Td>
          <Td>Ativo</Td>
          <Td>
            <ButtonEdit>Editar</ButtonEdit>
          </Td>
          <Td>
            <ButtonRemove>X</ButtonRemove>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">1</Th>
          <Td>Eduardo Alves Zuppo</Td>
          <Td>523.029.008-04</Td>
          <Td>zuppo.edu@gmail.com</Td>
          <Td>Pago</Td>
          <Td>Ativo</Td>
          <Td>
            <ButtonEdit>Editar</ButtonEdit>
          </Td>
          <Td>
            <ButtonRemove>X</ButtonRemove>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">1</Th>
          <Td>Eduardo Alves Zuppo</Td>
          <Td>523.029.008-04</Td>
          <Td>zuppo.edu@gmail.com</Td>
          <Td>Pago</Td>
          <Td>Ativo</Td>
          <Td>
            <ButtonEdit>Editar</ButtonEdit>
          </Td>
          <Td>
            <ButtonRemove>X</ButtonRemove>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">1</Th>
          <Td>Eduardo Alves Zuppo</Td>
          <Td>523.029.008-04</Td>
          <Td>zuppo.edu@gmail.com</Td>
          <Td>Pago</Td>
          <Td>Ativo</Td>
          <Td>
            <ButtonEdit>Editar</ButtonEdit>
          </Td>
          <Td>
            <ButtonRemove>X</ButtonRemove>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">1</Th>
          <Td>Eduardo Alves Zuppo</Td>
          <Td>523.029.008-04</Td>
          <Td>zuppo.edu@gmail.com</Td>
          <Td>Pago</Td>
          <Td>Ativo</Td>
          <Td>
            <ButtonEdit>Editar</ButtonEdit>
          </Td>
          <Td>
            <ButtonRemove>X</ButtonRemove>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">1</Th>
          <Td>Eduardo Alves Zuppo</Td>
          <Td>523.029.008-04</Td>
          <Td>zuppo.edu@gmail.com</Td>
          <Td>Pago</Td>
          <Td>Ativo</Td>
          <Td>
            <ButtonEdit>Editar</ButtonEdit>
          </Td>
          <Td>
            <ButtonRemove>X</ButtonRemove>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">1</Th>
          <Td>Eduardo Alves Zuppo</Td>
          <Td>523.029.008-04</Td>
          <Td>zuppo.edu@gmail.com</Td>
          <Td>Pago</Td>
          <Td>Ativo</Td>
          <Td>
            <ButtonEdit>Editar</ButtonEdit>
          </Td>
          <Td>
            <ButtonRemove>X</ButtonRemove>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">1</Th>
          <Td>Eduardo Alves Zuppo</Td>
          <Td>523.029.008-04</Td>
          <Td>zuppo.edu@gmail.com</Td>
          <Td>Pago</Td>
          <Td>Ativo</Td>
          <Td>
            <ButtonEdit>Editar</ButtonEdit>
          </Td>
          <Td>
            <ButtonRemove>X</ButtonRemove>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">1</Th>
          <Td>Eduardo Alves Zuppo</Td>
          <Td>523.029.008-04</Td>
          <Td>zuppo.edu@gmail.com</Td>
          <Td>Pago</Td>
          <Td>Ativo</Td>
          <Td>
            <ButtonEdit>Editar</ButtonEdit>
          </Td>
          <Td>
            <ButtonRemove>X</ButtonRemove>
          </Td>
        </Tr> */}
      </Tbody>
    </Container>
  );
};
