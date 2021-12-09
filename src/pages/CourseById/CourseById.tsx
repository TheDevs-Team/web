/* eslint-disable no-unused-vars */
import React from 'react';
import { If, Activities, Button } from '~/components';
import { isAdm } from '~/services/auth';
import {
  Container,
  MenuStyled,
  Main,
  LoadingPageStyled,
  InfoCard,
  NameCourse,
  YearCourse,
  HeadInfo,
  DataCourse,
  Materials,
  Students,
  ContainerActivities,
  Content,
  Users,
  CreateCard,
  UsersContainer,
  AddModal,
  DeleteMaterialModal,
} from './styles';

import moment from 'moment';
import { getCurrentCourseID } from '~/utils';

type Props = {
  hover: HoverIconsType;
  setHover: (value: HoverIconsType) => void;
  loaded: boolean;
  course: CourseType;
  tab: string;
  setTab: (tab: string) => void;
  notInCourse: UserType[];
  setAddUser: (value: boolean) => void;
  addUser: boolean;
  addUserInCourse: (value: CreateStudentCourseType) => void;
  setCurrent: (id: string) => void;
  getCurrentUserID: () => string;
  inCourse: StudentCourseType[];
  removeUser: boolean;
  removeUserInCourse: (value: CreateStudentCourseType) => void;
  setRemoveUser: (value: boolean) => void;
  materials: MaterialsType[];
  removeMaterial: (value: RemoveMaterialsType) => void;
  deleteMaterial: boolean;
  setDeleteMaterial: (value: boolean) => void;
  getCurrentMaterialID: () => string;
  setCurrentMaterial: (value: string) => void;
};

const CourseById: React.FC<Props> = ({
  hover,
  setHover,
  loaded,
  course,
  tab,
  setTab,
  notInCourse,
  setAddUser,
  addUser,
  addUserInCourse,
  setCurrent,
  getCurrentUserID,
  inCourse,
  removeUser,
  removeUserInCourse,
  setRemoveUser,
  materials,
  removeMaterial,
  deleteMaterial,
  setDeleteMaterial,
  setCurrentMaterial,
  getCurrentMaterialID,
}) => {
  return (
    <Container>
      <If condition={!loaded}>
        <LoadingPageStyled />
      </If>
      <If condition={loaded}>
        <If condition={isAdm()}>
          <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
          <If condition={addUser}>
            <AddModal
              context="addUser"
              onClose={() => setAddUser(false)}
              onConfirm={() => addUserInCourse({ course_id: getCurrentCourseID()!, user_id: getCurrentUserID() })}
            />
          </If>
          <If condition={removeUser}>
            <AddModal
              context="removeUser"
              onClose={() => setRemoveUser(false)}
              onConfirm={() => removeUserInCourse({ course_id: getCurrentCourseID()!, user_id: getCurrentUserID() })}
            />
          </If>
          <If condition={deleteMaterial}>
            <DeleteMaterialModal
              context="removeMaterial"
              onClose={() => setDeleteMaterial(false)}
              onConfirm={() => removeMaterial({ course_id: getCurrentCourseID()!, id: getCurrentMaterialID() })}
            />
          </If>
          <Main>
            <InfoCard>
              <HeadInfo>
                <Materials tabVisible={tab === 'materials'} onClick={() => setTab('materials')}>
                  Materiais
                </Materials>
                <Students tabVisible={tab === 'participants'} onClick={() => setTab('participants')}>
                  Participantes
                </Students>
                <Students tabVisible={tab === 'addstudents'} onClick={() => setTab('addstudents')}>
                  Adicionar Alunos
                </Students>
              </HeadInfo>
              <DataCourse>
                <NameCourse>{course.name}</NameCourse>
                <YearCourse>{moment().format('Y')} - TURMA G2K</YearCourse>
              </DataCourse>
            </InfoCard>

            <If condition={tab === 'materials'}>
              <Content>
                <CreateCard>
                  <span>Olá, Professor!</span>
                  <p>Aqui você pode criar novos materiais pra este curso!</p>
                  <Button>Criar Material</Button>
                </CreateCard>
                <ContainerActivities>
                  {materials.map((material, idx) => (
                    <Activities
                      key={idx}
                      material={material}
                      deleteMaterial={() => {
                        setCurrentMaterial(material.id);
                        setDeleteMaterial(true);
                      }}
                    />
                  ))}
                </ContainerActivities>
              </Content>
            </If>

            <If condition={tab === 'addstudents'}>
              <Content>
                <UsersContainer>
                  <span>Alunos Disponíveis</span>
                  {notInCourse.map((user, idx) => (
                    <Users
                      key={idx}
                      name={user.name}
                      showAdd
                      add={() => {
                        setCurrent(user.id);
                        setAddUser(true);
                      }}
                    />
                  ))}
                </UsersContainer>
              </Content>
            </If>
            <If condition={tab === 'participants'}>
              <UsersContainer>
                <span>Alunos Participantes</span>
                {inCourse.map((user, idx) => (
                  <Users
                    key={idx}
                    name={user.user.name}
                    showDelete
                    remove={() => {
                      setCurrent(user.user.id);
                      setRemoveUser(true);
                    }}
                  />
                ))}
              </UsersContainer>
            </If>
          </Main>
        </If>
        <If condition={!isAdm()}>
          <MenuStyled hover={hover} setHover={setHover} active={'COURSES'} />
          <Main>
            <InfoCard>
              <HeadInfo>
                <Materials tabVisible={tab === 'materials'} onClick={() => setTab('materials')}>
                  Materiais
                </Materials>
              </HeadInfo>
              <DataCourse>
                <NameCourse>{course.name}</NameCourse>
                <YearCourse>{moment().format('Y')} - TURMA G2K</YearCourse>
              </DataCourse>
            </InfoCard>
            <If condition={tab === 'materials'}>
              <Content>
                <CreateCard>
                  <span>Olá, Aluno!</span>
                  <p>Aqui você pode ver os materiais disponibilizados!</p>
                </CreateCard>
                <ContainerActivities>
                  {materials.map((material, idx) => (
                    <Activities key={idx} material={material} />
                  ))}
                </ContainerActivities>
              </Content>
            </If>
          </Main>
        </If>
      </If>
    </Container>
  );
};

export default CourseById;
