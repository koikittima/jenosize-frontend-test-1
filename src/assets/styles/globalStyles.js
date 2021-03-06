import styled from 'styled-components'

export const Button = styled.button`
    background: ${({ bg }) => bg || "#fff"};
    color: ${({ color }) => color || "#000"};
    display: inline-block;
    justify: center;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    ${({ type }) => `${type == "none" ? "cursor: default" : "cursor: pointer"}`};
    -webkit-user-select: none;
    user-select: none;    
    ${({ border }) => `border: ${border ? border : "1px solid transparent"}`};
    ${({ width }) => `width: ${width}`};
    ${({ height }) => `height: ${height}`};
    border-radius:  ${({ border_radius }) => `${border_radius ? border_radius : "5px"}`};
    margin: ${({ margin }) => `${margin ? margin : ""}`};
    line-height: 1.5;
    ${({ shadow }) => `box-shadow: ${shadow ? "0px 2px 2px rgba(97, 97, 97, 0.14), 0px 2px 2px rgba(97, 97, 97, 0.16)" : ""}`};

`
export const Box = styled.div`
    background: #ffff;
    border-radius: 12px;
    border:1px solid #B3B3B3
    `
    export const BoxCard = styled.div`
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    `
