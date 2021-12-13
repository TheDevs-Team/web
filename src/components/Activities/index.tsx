import moment from 'moment';
import 'moment/locale/pt-br';
import React from 'react';
import { If } from '..';

import {
  Container,
  IconDocument,
  Title,
  Date,
  Info,
  IconContainer,
  Functions,
  IconDelete,
  Content,
  IconVideo,
  IconImage,
} from './styles';

type Props = {
  material: MaterialsType;
  deleteMaterial?: () => void;
};

export const Activities: React.FC<Props> = ({ material, deleteMaterial }) => {
  return (
    <Container>
      <Content onClick={() => window.open(material.file, '_blank')}>
        <IconContainer>
          <If condition={material.type === 'IMAGE'}>
            <IconImage />
          </If>
          <If condition={material.type === 'VIDEO'}>
            <IconVideo />
          </If>
          <If condition={material.type === 'TEXT' || material.type === 'APPLICATION'}>
            <IconDocument />
          </If>
        </IconContainer>
        <Info>
          <Title>{material.name}</Title>
          <Date>{moment(material.created_at).format('LLL')}</Date>
        </Info>
      </Content>

      <Functions>
        <IconDelete onClick={deleteMaterial} />
      </Functions>
    </Container>
  );
};
