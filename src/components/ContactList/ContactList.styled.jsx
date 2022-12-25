import styled from '@emotion/styled';

export const List = styled.ul`
padding-left: 0px`

export const Contact = styled.li`
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin-bottom: 8px;
    font-weight: 400;
    
`;
export const Button = styled.button`
    width: 120px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: grey;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    &:hover {
        background-color: #7177a3;
        scale: 1.05;
        font-weight: 600;
        box-shadow: 1px 1px 2px black;
    }
`;