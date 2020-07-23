import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRowsFinal } from '../../reducers/table-rows';
import {
    TableS,
    CounterTd,
    PointsTd,
    NameTd,
    Container,
} from './styles';

import Juventus from '../../assets/Juventus.jpg';
import Internazionale from '../../assets/Internazionale.png';
import Napoli from '../../assets/Napoli.png';
import Milan from '../../assets/Milan.png';
import Roma from '../../assets/Roma.png';
import Atalanta from '../../assets/Atalanta.png';
import Sampdoria from '../../assets/Sampdoria.png';
import Leece from '../../assets/Lecce.png';
import Lazio from '../../assets/Lecce.png';

import Verona from '../../assets/Lecce.png';
import Parma from '../../assets/Lecce.png';
import Bologna from '../../assets/Lecce.png';
import Sassuolo from '../../assets/Lecce.png';
import Cagliari from '../../assets/Lecce.png';
import Fiorentina from '../../assets/Lecce.png';
import Torino from '../../assets/Lecce.png';
import Genoa from '../../assets/Lecce.png';
import Lecce from '../../assets/Lecce.png';
import SPAL from '../../assets/Lecce.png';
import Brescia from '../../assets/Lecce.png';
import Udinese from '../../assets/Lecce.png';


const images = {
    Juventus,
    Internazionale,
    Lazio,
    Leece,
    Napoli,
    Milan,
    Roma,
    Atalanta,
    Sampdoria,
    Verona,
    Parma,
    Bologna,
    Sassuolo,
    Cagliari,
    Fiorentina,
    Torino,
    Genoa,
    Lecce,
    SPAL,
    Brescia,
    Udinese,
};

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTrs: [],
        }
    }

    componentDidMount() {
        this.props.getRowsFinal();
    }

    trClick = (index) => {
        let activeTrs = this.state.activeTrs;
        if (activeTrs.includes(index)) {
            activeTrs = activeTrs.filter(i => i !== index);
        } else {
            activeTrs.push(index);
        }

        this.setState({ ...this.state, activeTrs });
    };

    render() {
        const { activeTrs } = this.state;

        return this.props.errorMessage
            ? <div>Error occured: {this.props.errorMessage}</div>
            : <Container>
                {
                    this.props.isRowsCollectionFetching
                        ? <div>Loading...</div>
                        : <TableS>
                            <thead>
                            <tr>
                                <th className='positions'>Positions</th>
                                <th className='names'></th>
                                <th>Pts.</th>
                                <th>P.</th>
                                <th>W.</th>
                                <th>D.</th>
                                <th>L</th>
                                <th>GF.</th>
                                <th>GA.</th>
                                <th>GD.</th>
                            </tr>
                            </thead>
                            <tbody>
                            { this.props.rowsCollection.map((row, index) =>
                                <tr onClick={() => this.trClick(index)}
                                    key={`#${row.Name}`}
                                    className={activeTrs.includes(index) ? 'active' : ''}
                                >
                                    <CounterTd>{index + 1}</CounterTd>
                                    <NameTd>
                                        <div className='image-container'><img height={25} src={images[row.Name]}/></div>
                                        <div>{row.Name}</div>
                                    </NameTd>
                                    <PointsTd>{row.Points}</PointsTd>
                                    <td>{row.Played}</td>
                                    <td>{row.Won}</td>
                                    <td>{row.Drawn}</td>
                                    <td>{row.Lost}</td>
                                    <td>{row.For}</td>
                                    <td>{row.Against}</td>
                                    <td>{row.GoalDiff}</td>
                                </tr>)}
                            </tbody>
                        </TableS>
                }
            </Container>
    }
}

export default connect(
    ({ rows: { rowsCollection, isRowsCollectionFetching, errorMessage } }) => ({ rowsCollection, isRowsCollectionFetching, errorMessage }),
    {
        getRowsFinal: () => getRowsFinal,
    }

)(Table);
