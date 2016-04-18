import React from 'react'
import ItemSummary from './ItemSummary'

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justfyContent: 'space-around'
}

const renderSummaries = (data, width) => (
  data.map(i => (
    <ItemSummary key={i} index={i} width={width} />)
  )
)

const ItemGridList = ({ itemData }) => {
  const componentWidth = window.innerWidth / 2
  const components = renderSummaries(itemData, componentWidth)
  return <div style={style}>{components}</div>
}

export default ItemGridList
