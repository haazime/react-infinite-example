import React from 'react'
import ListItem from './ListItem'

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justfyContent: 'space-around'
}

const renderItems = (data, width) => (
  data.map(i => (
    <ListItem key={i} index={i} width={width} />)
  )
)

const ItemGridList = ({ itemData }) => {
  const componentWidth = window.innerWidth / 2
  const components = renderItems(itemData, componentWidth)
  return <div style={style}>{components}</div>
}

export default ItemGridList
