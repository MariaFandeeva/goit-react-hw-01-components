import styled from 'styled-components';

export const FrList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: antiquewhite;
  box-shadow: 4px 4px 5px -3px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  padding: 15px;
  width: 180px;
  cursor: pointer;

  &:hover {
    scale: 105%;
  }
`;

export const Pr = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const IsOnline = styled.span`
  padding: 13px;
  margin-right: 10px;
  border-radius: 25px;
  background-color: ${p => {
    return p.IsOnline ? 'green' : 'red';
  }};
`;
