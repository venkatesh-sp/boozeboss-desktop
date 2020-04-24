import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Table } from 'rsuite';

const {Column, HeaderCell, Cell } = Table;

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em 1em 1em 1em;
`;

const FieldsRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1em 0 1em 0;
`;

const FieldLabelContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const FieldLabel = styled.b`
    margin: 0 0.5em 0.5em 0;
`;


export default class ClientBrandsTable extends Component {

    render() {
        const {brands} = this.props;
        return (
            <FieldContainer>
                <FieldLabelContainer> 
                    <FieldLabel>Brands</FieldLabel>
                </FieldLabelContainer>
                {brands && 
                    brands.length > 0 ? (
                    <Table
                        data={brands}
                    >
                        <Column resizable>
                            <HeaderCell>
                                Name
                            </HeaderCell>
                            <Cell dataKey="name">
                                {rowData => rowData.name}
                            </Cell>
                        </Column>
                        <Column resizable>
                            <HeaderCell>
                                Type
                            </HeaderCell>
                            <Cell dataKey="product_type">
                                {rowData => rowData.product_type}
                            </Cell>
                        </Column>
                        <Column resizable>
                            <HeaderCell>
                                Description
                            </HeaderCell>
                            <Cell dataKey="description">
                                {rowData => rowData.description}
                            </Cell>
                        </Column>
                        <Column width={150}>
                            <HeaderCell>
                                Actions
                            </HeaderCell>
                            <Cell dataKey="actions">
                                    <p>ok</p>
                            </Cell>
                        </Column>
                    </Table>
                ) : (
                    <p>No Brands</p>
                )}
            </FieldContainer>
        )
    }
}

ClientBrandsTable.prototypes = {

}