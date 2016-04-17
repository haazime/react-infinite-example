import React from 'react'
import { Card, CardTitle } from 'material-ui'

const Item = ({ key, index }) => (
  <Card key={key}>
    <CardTitle title={`#${index}`} subtitle={`Subtitle - ${index}`} />
  </Card>
)

export default Item
