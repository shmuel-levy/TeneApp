import styled from 'styled-components';
import { Container } from '../../globalStyles'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: linear-gradient(135deg, #2d5016 0%, #4a6741 50%, #6b8e5a 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 4px 20px rgba(45, 80, 22, 0.3);
    border-bottom: 3px solid #a8d5a8;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    direction: rtl;

    ${Container}
`

export const NavLogo = styled(Link)`
    color: #a8d5a8;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    transition: color 0.3s ease;
    
    &:hover {
        color: #f0f8e8;
    }
`

export const NavIcon = styled(FaMagento)`
    margin-left: 0.5rem;
    color: #a8d5a8;
    transition: color 0.3s ease;
    
    &:hover {
        color: #f0f8e8;
    }
`

export const HamburgerIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;   
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
  
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease;
        background: linear-gradient(135deg, #2d5016 0%, #4a6741 50%, #6b8e5a 100%);
        right: ${({ click }) => (click ? 0 : '-100%')};
    }
`
export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    border-radius: 2px;

    &:hover {
        border-bottom: 4px solid #a8d5a8;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border-bottom: none;
        }
    }

`

export const NavLinks = styled(Link)`
    color: #a8d5a8;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
        color: #f0f8e8;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #a8d5a8;
            transition: all 0.3s ease;
        }
    }
`

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;