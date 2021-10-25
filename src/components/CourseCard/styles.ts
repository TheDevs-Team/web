import styled from 'styled-components';
import { colors } from '~/theme';
import { FaMoneyBillWave } from '~/utils';

export const CoursesCard = styled.div`
  width: 18vw;
  height: 50vh;
  background: #2b2b2c;
  display: flex;
  flex-direction: column;
  border-radius: 8px 8px 0 0;
  border-bottom: 2px solid #38c58d;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    background: #38383a;
    transition: 0.5;
  }
`;

export const CoursesCardContentIcon = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const CoursesCardContentTitle = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const CoursesCardContentDescription = styled.div`
  width: 80%;
  height: 48%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const BackgroudIconCard = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
  background: #38c58d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const IconMoney = styled(FaMoneyBillWave)`
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
`;

export const TitleCard = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: ${colors.primary.white};
`;

export const DescriptionCard = styled.h4`
  font-size: 13px;
  font-weight: 300;
  color: ${colors.primary.light};
`;
