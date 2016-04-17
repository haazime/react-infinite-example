import React from 'react'
import Item from './Item'

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justfyContent: 'space-around'
}

const ItemGridList = ({ itemData }) => {
  const itemWidth = window.innerWidth / 2
  const items = itemData.map(i => (
                  <Item key={i} index={i} width={itemWidth} />)
                )
  return <div style={style}>{items}</div>
}

export default ItemGridList
