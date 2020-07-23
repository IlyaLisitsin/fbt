import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getRowsFinal } from '../../reducers/table-rows';

const TableS = styled.table`
    border-spacing:0 5px;
    border-collapse: separate;

    tr:last-child th:first-child {
        border-bottom-left-radius: 9px;
        border-top-left-radius: 9px;
    }
    
    tr:last-child th:last-child {
        border-bottom-right-radius: 9px;
        border-top-right-radius: 9px;
    }
    
    tr td:first-child {
        border-bottom-left-radius: 9px;
        border-top-left-radius: 9px;
    }
    
    tr td:last-child {
        border-bottom-right-radius: 9px;
        border-top-right-radius: 9px;
    }
    
    td {
        background: #fff;
    }
    
    th {
        background: #fff;
        padding-top: 18px;
        padding-bottom: 15px;
    }
    
    th, td {
        padding-left: 31px;
        padding-right: 31px;
        padding-top: 18px;
        padding-bottom: 18px;
    }
    
    thead {
        font-size: 11px;
    }
`;

class Table extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRowsFinal();
    }

    render() {

        return <Fragment>
                {
                    this.props.isRowsCollectionFetching
                        ? <div>Loading...</div>
                        : <TableS>
                            <thead>
                            <tr>
                                <th>Positions</th>
                                <th></th>
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
                            { this.props.rowsCollection.map((row, index) => <tr key={`#${row.Name}`}>
                                <td>{++index}</td>
                                <td>{row.Name}</td>
                                <td>{row.Points}</td>
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
            </Fragment>
    }
}

export default connect(
    ({ rows: { rowsCollection, isRowsCollectionFetching } }) => ({ rowsCollection, isRowsCollectionFetching }),
    {
        getRowsFinal: () => getRowsFinal,
    }

)(Table);
