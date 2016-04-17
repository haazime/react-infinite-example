import React from 'react'
import { Card, CardMedia, CardTitle } from 'material-ui'
import ItemDetailContainer from './ItemDetailContainer'

class ItemSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { width, index } = this.props
    return (
      <div>
        <Card
          style={{width: width}}
          onTouchTap={this.handleOpen}
        >
          <CardMedia>
            <img src="/images/photo1.jpg" width={width} />
          </CardMedia>
          <CardTitle title={`#${index}`} subtitle={`Subtitle - ${index}`} />
        </Card>
        <ItemDetailContainer
          itemId={index}
          closeHandler={this.handleClose}
          isOpen={this.state.open}
        />
      </div>
    )
  }
}

export default ItemSummary
