import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { CourseStore } from '~/store';
import { notify } from '~/utils';
import { Modal, Container, Content, ButtonStyled, Input, Form, Span, Alert, Close, CloseWrapper } from './styles';

type Props = {
  onClose: () => void;
  onConfirm: () => void;
  course?: CourseStore;
};

const CreateCourseModal: React.FC<Props> = ({ course, onClose, onConfirm, ...rest }) => {
  const [dataCourse, setDataCourse] = useState({
    name: '',
    description: '',
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setDataCourse((old) => ({ ...old, [name]: value }));
  };

  const submitForm = async () => {
    const response = await course?.create(dataCourse);
    if (response) {
      notify('success', 'Curso criado com sucesso!');
      return setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    return notify('error', 'Erro ao criar curso!');
  };

  return (
    <Container {...rest}>
      <Modal>
        <CloseWrapper>
          <Close onClick={onClose} />
        </CloseWrapper>
        <Form>
          <Span>Criar Curso</Span>
          <Alert>OBS: Preencha todos os campos!</Alert>
          <Input
            id="name"
            name="name"
            label="Nome do Curso"
            variant="filled"
            color={'success'}
            helperText={'Dica: Utilize um nome objetivo.'}
            onChange={handleChange}
          />
          <Input
            id="description"
            name="description"
            label="Descrição  do Curso"
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

export default inject('course')(observer(CreateCourseModal));
