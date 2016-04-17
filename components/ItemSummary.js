import React from 'react'
import { Card, CardMedia, CardTitle } from 'material-ui'
import { Dialog, FlatButton } from 'material-ui'

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

    const actions = [
      <FlatButton label="close" primary={true} onTouchTap={this.handleClose} />
    ]
    const dialog = (
      <Dialog
        title={`Item #${index}`}
        actions={actions}
        modal={true}
        open={this.state.open}
      >
        Detail
      </Dialog>
    )
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
        {dialog}
      </div>
    )
  }
}

export default ItemSummary
