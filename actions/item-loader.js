const loadItem = (seed) => {
  const items = []
  for (let i = 0; i < 20; i++) { items.push(seed + i) }
  return items
}

export default loadItem
