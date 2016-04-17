import React from 'react'
import InfiniteScrollContainer from '@fand/react-infinite-scroll-container'
import ItemGridList from './ItemGridList'

const generateText = (seed) => {
  const items = []
  for (let i = 0; i < 20; i++) { items.push(seed + i) }
  return items
}

class ItemList extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      pos: 0,
    }
  }

  componentDidMount() {
    this.loadNextItems()
  }

  loadNextItems() {
    const items = generateText(this.state.pos)
    this.setState({
      items: this.state.items.concat(items),
      pos: this.state.pos + items.length
    })
  }

  render() {
    return (
      <div className="ItemListWrapper">
        <InfiniteScrollContainer
          padding={600}
          interval={300}
          onScroll={() => this.loadNextItems()}
        >
          <ItemGridList itemData={this.state.items} />
        </InfiniteScrollContainer>
      </div>
    )
  }
}

export default ItemList
