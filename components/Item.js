import React from 'react'
import { Card, CardTitle } from 'material-ui'

const Item = ({ index, width }) => (
  <Card style={{width: width}}>
    <CardTitle title={`#${index}`} subtitle={`Subtitle - ${index}`} />
  </Card>
)

export default Item
