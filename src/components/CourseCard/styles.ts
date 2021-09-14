import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.div`
  width: 230px;
  min-height: 190px;
  margin: 12px 12px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 12px -10px black;
  box-shadow: 0px 0px 4px 0.5px #f1f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: pointer;
    transition: 300ms;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.span`
  text-align: center;
  font-size: 16px;
  color: ${colors.primary.main};
  margin-top: 20px;
`;

export const DescriptionCourse = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  text-align: justify;
`;

export const Description = styled.span`
  color: #313131;
  font-size: 14px;
  margin-top: 10px;
`;
