import styled from 'styled-components';

export const Table = styled.table`
  text-align: center;
  border: 1px solid grey;
  border-radius: 5px;
  width: 600px;
  padding: 5px;
  box-shadow: 4px 4px 5px -3px rgba(0, 0, 0, 0.5);
`;

export const Td = styled.td`
  /* border: 1px solid; */
`;

export const Th = styled.th`
  background-color: #c4e7f5;
  padding-bottom: 5px;
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;
  &:last-child {
    border-right: none;
  }
`;
export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: lightgrey;
  }
`;
