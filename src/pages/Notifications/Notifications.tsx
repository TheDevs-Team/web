import React from 'react';
import { If } from '~/components';
import { isAdm } from '~/services/auth';
import { useFormikContext, FormikProps } from '~/utils';

import {
  Container,
  MenuStyled,
  Main,
  LoadingPageStyled,
  ToggleStyled,
  OptionsContainer,
  OptionLine,
  TitleOption,
  ButtonStyled,
  ButtonContent,
  Content,
  TitlePage,
} from './styles';

type Props = {
  loaded: boolean;
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
};

export const Notifications: React.FC<Props> = ({ loaded, hover, setHover }) => {
  const { values, submitForm, setFieldValue }: FormikProps<NotificationOptionsType> = useFormikContext();

  return (
    <Container>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>
      <If condition={loaded}>
        <If condition={isAdm()}>
          <MenuStyled hover={hover} setHover={setHover} active={'NOTIFICATIONS'} />
          <Main>
            <OptionsContainer>
              <Content>
                <TitlePage>Selecione a forma de notificação</TitlePage>
              </Content>
              <Content>
                <OptionLine>
                  <TitleOption>Usuários pendentes</TitleOption>
                  <ToggleStyled checked={values.pendings} onChange={(value) => setFieldValue('pendings', value)} />
                </OptionLine>
                <OptionLine>
                  <TitleOption>Novos Curso</TitleOption>
                  <ToggleStyled
                    checked={values.new_courses}
                    onChange={(value) => setFieldValue('new_courses', value)}
                  />
                </OptionLine>
                <OptionLine>
                  <TitleOption>Lembrete de aulas</TitleOption>
                  <ToggleStyled
                    checked={values.class_notification}
                    onChange={(value) => setFieldValue('class_notification', value)}
                  />
                </OptionLine>
              </Content>
              <Content>
                <ButtonContent>
                  <ButtonStyled onClick={submitForm}>Enviar</ButtonStyled>
                </ButtonContent>
              </Content>
            </OptionsContainer>
          </Main>
        </If>
      </If>
    </Container>
  );
};

export default Notifications;
