import React from 'react'
import InfiniteScrollContainer from '@fand/react-infinite-scroll-container'
import Item from './Item'

const generateText = (seed) => {
  const items = []
  for (let i = 0; i < 50; i++) { items.push(seed + i) }
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
      <div className="ItemList">
        <InfiniteScrollContainer
          padding={100}
          interval={200}
          onScroll={() => this.loadNextItems()}
        >
          {this.state.items.map(i => <Item key={i} index={i} />)}
        </InfiniteScrollContainer>
      </div>
    )
  }
}

export default ItemList
