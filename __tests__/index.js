const matchesBy = require('..')

describe('#matchesBy', () => {
  it('compares two objects according to the supplied keys and returns true', () => {
    const obj1 = {
      nested: {
        key: {
          similar: 1,
          different: 2,
        },
      },
      root: 'string',
    }
    const obj2 = {
      nested: {
        key: {
          similar: 1,
          different: 3,
        },
      },
      root: 'string',
    }
    expect(matchesBy(['nested.key.similar', 'root'], obj1, obj2)).toEqual(true)
  })

  it('compares two objects according to the supplied keys and returns false', () => {
    const obj1 = {
      nested: {
        key: {
          similar: 1,
          different: 2,
        },
      },
      root: 'string',
    }
    const obj2 = {
      nested: {
        key: {
          similar: 1,
          different: 3,
        },
      },
      root: 'string',
    }
    expect(matchesBy(['nested.key.different'], obj1, obj2)).toEqual(false)
  })
})
