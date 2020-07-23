import React, { Component } from 'react';
import styled from 'styled-components';
import Table from '../table/table.component';

const Wrapper = styled.div`
  padding-left: 7vw;
  padding-right: 7vw;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 30px;
`;

class Main extends Component{
    render() {
        return <Wrapper>
            <Title>Standings</Title>
            <Table/>
        </Wrapper>
    };
}

export default Main;
