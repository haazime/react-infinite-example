import React from 'react'
import InfiniteScrollContainer from '@fand/react-infinite-scroll-container'
import ItemGridList from './ItemGridList'
import loadItem from '../actions/item-loader'

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
    const items = loadItem(this.state.pos)
    this.setState({
      items: this.state.items.concat(items),
      pos: this.state.pos + items.length
    })
  }

  render() {
    const padding = window.innerHeight / 2
    return (
      <div className="ItemListWrapper">
        <InfiniteScrollContainer
          padding={padding}
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
