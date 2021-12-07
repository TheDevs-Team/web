import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { CourseStore } from '~/store';
import { notify } from '~/utils';
import { Modal, Container, Content, ButtonStyled, Input, Form, Span, Alert, Close, CloseWrapper } from './styles';

type Props = {
  onClose: () => void;
  onConfirm?: () => void;
  course?: CourseStore;
  data?: CourseType;
};

const UpdateCourseModal: React.FC<Props> = ({ course, onClose, onConfirm, data, ...rest }) => {
  const [dataCourse, setDataCourse] = useState({
    name: data?.name,
    description: data?.description,
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setDataCourse((old) => ({ ...old, [name]: value }));
  };

  const submitForm = async () => {
    const response = await course?.update({ ...dataCourse, id: course.current });
    if (response) {
      notify('success', 'Curso atualizado com sucesso!');
      return setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    return notify('error', 'Erro ao atualizar curso!');
  };

  return (
    <Container {...rest}>
      <Modal>
        <CloseWrapper>
          <Close onClick={onClose} />
        </CloseWrapper>
        <Form>
          <Span>Atualizar Curso!</Span>
          <Alert>OBS: Preencha todos os campos!</Alert>
          <Input
            id="name"
            name="name"
            label="Nome do Curso"
            variant="filled"
            color={'success'}
            value={dataCourse.name}
            helperText={'Dica: Utilize um nome objetivo.'}
            onChange={handleChange}
          />
          <Input
            id="description"
            name="description"
            label="Descrição  do Curso"
            variant="filled"
            color={'success'}
            value={dataCourse.description}
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

export default inject('course')(observer(UpdateCourseModal));
