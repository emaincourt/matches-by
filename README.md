[![CircleCI](https://circleci.com/gh/emaincourt/matches-by/tree/master.svg?style=shield)](https://circleci.com/gh/emaincourt/matches-by/tree/master)
[![codecov](https://codecov.io/gh/emaincourt/matches-by/branch/master/graph/badge.svg)](https://codecov.io/gh/emaincourt/matches-by)

## matchesBy

## Usage

`matches-by` allows to you compare nested values of two objects thanks to [get](https://lodash.com/docs/4.17.5#get) from [lodash](https://github.com/lodash/lodash/). The default export is a curried method whose prototype is the following :

```javascript
matchesBy(Array<String>, Object, Object)
```

## Example

```javascript
const { unionWith } = require('lodash')
const matchesBy = require('matches-by')

const users = [
  {
    firstName: 'Dora',
    lastName: 'Wyman',
    email: 'Courtney_Kiehn80@yahoo.com',
  },
  {
    firstName: 'Arvid',
    lastName: 'Wyman',
    email: 'Wilber82@hotmail.com',
  },
]

const body = [
  {
    firstName: 'Arvid',
    lastName: 'Wyman',
    email: 'Courtney_Kiehn80@yahoo.com',
  },
]

console.log(
  unionWith(users, body, matchesBy(['firstName', 'lastName', 'email']))
)

/*
[
  {
    firstName: 'Dora',
    lastName: 'Wyman',
    email: 'Courtney_Kiehn80@yahoo.com',
  },
  {
    firstName: 'Arvid',
    lastName: 'Wyman',
    email: 'Wilber82@hotmail.com',
  },
  {
    firstName: 'Arvid',
    lastName: 'Wyman',
    email: 'Courtney_Kiehn80@yahoo.com',
  },
]
*/
```
