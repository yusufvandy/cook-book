import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SContainer } from '../styles/global'

export const SBrand = styled(Link)`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`
export const SNavbar = styled.div`
    background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
    width: 100%;
    color: white;
    padding: 15px 0;
`
export const SContainerCustom = styled(SContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const SLink = styled(Link)`
    color: #fff;
    margin-left: 15px;
`
export const SCircleImg = styled.img`
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50px;
`
export const SFlexCenter = styled.div`
    display: flex;
    align-items: center;
`