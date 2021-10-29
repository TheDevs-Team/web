import React from 'react';
import { Container, AreaChartStyled } from './styles';
import { Area, XAxis, YAxis, Tooltip } from 'recharts';

type Props = {
  data: any[];
};

export const Recharts: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <AreaChartStyled data={data}>
        <defs>
          <linearGradient id="coloruv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="2%" stopColor="#67f7bd" stopOpacity={0.8} />
            <stop offset="98%" stopColor="#202024" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="alunos" stroke="#67f7bd" fillOpacity={1} fill="url(#coloruv)" strokeWidth={3} />
      </AreaChartStyled>
    </Container>
  );
};
