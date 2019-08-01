import React from 'react';
import styled from 'styled-components';

const SCard = styled.div`
    flex: 0 0 calc(22% - 30px);
    margin: 0 15px;
    border: 1px #ccc solid;
    margin-bottom: 25px;
    padding: 15px;
`

const Card = (props) => {
    return (
        <SCard>{props.recipes[props.keyID].label}</SCard>
    );
}
 
export default Card;