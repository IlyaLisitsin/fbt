import styled from 'styled-components';

export const TableS = styled.table`
    border-spacing:0 5px;
    border-collapse: separate;
    table-layout: fixed;
    
   .positions {
        width: 30px;
   }

    .names {
        width: 220px;
   }

    tr:last-child th:first-child {
        border-bottom-left-radius: 9px;
        border-top-left-radius: 9px;
    }
    
    tr:last-child th:last-child {
        border-bottom-right-radius: 9px;
        border-top-right-radius: 9px;
    }
    
    td:first-child {
        border-bottom-left-radius: 9px;
        border-top-left-radius: 9px;
        border-left: 5px solid #fff;
    }
    
    tr:nth-child(-n+3) td:first-child {
        border-left-color: #00c906;
    }
    
    tr:nth-child(4) td:first-child {
        border-left-color: #000e88;
    }
    
    tr:nth-child(5) td:first-child {
        border-left-color: rgba(65, 154, 249, 0.99);
    }
    
    tr.active td {
        background: #84754e;
        color: #fff;
    }
    
    td:last-child {
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
    
    td {
        font-size: 12px;
    }
    
    thead {
        font-size: 11px;
        text-align: left;
    }
`;

export const CounterTd = styled.td`
    font-weight: 800;
    font-size: 16px !important;
`;

export const PointsTd = styled.td`
    font-weight: 800;
`;

export const NameTd = styled.td`
    font-weight: bold;
    display: flex;
    align-items: center;
    position: relative;
    
    .image-container {
        width: 36px;
        text-align: center;
        position: relative;
        left: 0;
        margin-right: 9px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    @media screen and (max-device-width: 1040px) {
        overflow: scroll;
    }
`;
