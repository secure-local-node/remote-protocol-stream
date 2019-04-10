const { Protocol, unserialize } = require('./')
const Socket = require('simple-websocket')

const socket = new Socket('ws://localhost:3000')

socket.on('connect', () => {
  global.alice = new Protocol({ connect: () => socket })

  alice.call('hey joe!', [ 'argument1', 2, { property: 3 } ], (error, results) => {
    if (error) {
      console.log('got error', error)
    } else {
      console.log('got response', unserialize(results))
    }
  })

  alice.call('yo', [], (error, results) => {
    if (error) {
      console.log('got error', error)
    } else {
      console.log('got response', unserialize(results))
    }
  })
})