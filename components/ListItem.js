import React from 'react'
import { Card, CardMedia, CardTitle } from 'material-ui'

const Item = ({ index, width }) => (
  <Card style={{width: width}}>
    <CardMedia>
      <img src="/images/photo1.jpg" width={width} />
    </CardMedia>
    <CardTitle title={`#${index}`} subtitle={`Subtitle - ${index}`} />
  </Card>
)

export default Item
