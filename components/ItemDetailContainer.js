import React from 'react'
import { Dialog, FlatButton } from 'material-ui'

const style = {
  width: '100%',
  height: '100%',
}

const ItemDetailContainer = ({ itemId, closeHandler, isOpen }) => {
  const actions = [
    <FlatButton label="close" primary={true} onTouchTap={closeHandler} />
  ]
  return (
    <Dialog
      title={`Item #${itemId}`}
      actions={actions}
      modal={true}
      contentStyle={style}
      open={isOpen}
      autoDetectWindowHeight={false}
    >
      <p>Detail</p>
    </Dialog>
  )
}

export default ItemDetailContainer
