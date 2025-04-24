import React, { useContext } from 'react'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import { Card, Col, Row } from 'react-bootstrap'

const BrandBar = observer(() => {
        const {device} = useContext(Context)

  return (
    <Row className="d-flex">
    {device.brands.map(brand => 
        <Col key={brand.id}>
            <Card
            style={{cursor: 'pointer'}}
            className="p-3 align-items-center"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
            >
            {brand.name}
            </Card>
        </Col>
    )}
</Row>

  )
})

export default BrandBar