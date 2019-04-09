// This file is auto generated by the protocol-buffers cli tool

/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-redeclare */
/* eslint-disable camelcase */

// Remember to `npm install --save protocol-buffers-encodings`
var encodings = require('protocol-buffers-encodings')
var varint = encodings.varint
var skip = encodings.skip

var Command = exports.Command = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var Response = exports.Response = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var Error = exports.Error = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

defineCommand()
defineResponse()
defineError()

function defineCommand () {
  var enc = [
    encodings.bytes,
    encodings.string
  ]

  Command.encodingLength = encodingLength
  Command.encode = encode
  Command.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.id)) {
      var len = enc[0].encodingLength(obj.id)
      length += 1 + len
    }
    if (defined(obj.name)) {
      var len = enc[1].encodingLength(obj.name)
      length += 1 + len
    }
    if (defined(obj.arguments)) {
      for (var i = 0; i < obj.arguments.length; i++) {
        if (!defined(obj.arguments[i])) continue
        var len = enc[0].encodingLength(obj.arguments[i])
        length += 1 + len
      }
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.id)) {
      buf[offset++] = 10
      enc[0].encode(obj.id, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.name)) {
      buf[offset++] = 18
      enc[1].encode(obj.name, buf, offset)
      offset += enc[1].encode.bytes
    }
    if (defined(obj.arguments)) {
      for (var i = 0; i < obj.arguments.length; i++) {
        if (!defined(obj.arguments[i])) continue
        buf[offset++] = 26
        enc[0].encode(obj.arguments[i], buf, offset)
        offset += enc[0].encode.bytes
      }
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      id: null,
      name: "",
      arguments: []
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.id = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 2:
        obj.name = enc[1].decode(buf, offset)
        offset += enc[1].decode.bytes
        break
        case 3:
        obj.arguments.push(enc[0].decode(buf, offset))
        offset += enc[0].decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineResponse () {
  var enc = [
    encodings.bytes,
    encodings.string,
    Error
  ]

  Response.encodingLength = encodingLength
  Response.encode = encode
  Response.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.id)) {
      var len = enc[0].encodingLength(obj.id)
      length += 1 + len
    }
    if (defined(obj.name)) {
      var len = enc[1].encodingLength(obj.name)
      length += 1 + len
    }
    if (defined(obj.results)) {
      for (var i = 0; i < obj.results.length; i++) {
        if (!defined(obj.results[i])) continue
        var len = enc[0].encodingLength(obj.results[i])
        length += 1 + len
      }
    }
    if (defined(obj.error)) {
      var len = enc[2].encodingLength(obj.error)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.id)) {
      buf[offset++] = 10
      enc[0].encode(obj.id, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.name)) {
      buf[offset++] = 18
      enc[1].encode(obj.name, buf, offset)
      offset += enc[1].encode.bytes
    }
    if (defined(obj.results)) {
      for (var i = 0; i < obj.results.length; i++) {
        if (!defined(obj.results[i])) continue
        buf[offset++] = 26
        enc[0].encode(obj.results[i], buf, offset)
        offset += enc[0].encode.bytes
      }
    }
    if (defined(obj.error)) {
      buf[offset++] = 82
      varint.encode(enc[2].encodingLength(obj.error), buf, offset)
      offset += varint.encode.bytes
      enc[2].encode(obj.error, buf, offset)
      offset += enc[2].encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      id: null,
      name: "",
      results: [],
      error: null
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.id = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 2:
        obj.name = enc[1].decode(buf, offset)
        offset += enc[1].decode.bytes
        break
        case 3:
        obj.results.push(enc[0].decode(buf, offset))
        offset += enc[0].decode.bytes
        break
        case 10:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.error = enc[2].decode(buf, offset, offset + len)
        offset += enc[2].decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineError () {
  var enc = [
    encodings.string
  ]

  Error.encodingLength = encodingLength
  Error.encode = encode
  Error.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.name)) {
      var len = enc[0].encodingLength(obj.name)
      length += 1 + len
    }
    if (defined(obj.code)) {
      var len = enc[0].encodingLength(obj.code)
      length += 1 + len
    }
    if (defined(obj.message)) {
      var len = enc[0].encodingLength(obj.message)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.name)) {
      buf[offset++] = 10
      enc[0].encode(obj.name, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.code)) {
      buf[offset++] = 18
      enc[0].encode(obj.code, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.message)) {
      buf[offset++] = 26
      enc[0].encode(obj.message, buf, offset)
      offset += enc[0].encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      name: "",
      code: "",
      message: ""
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.name = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 2:
        obj.code = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 3:
        obj.message = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defined (val) {
  return val !== null && val !== undefined && (typeof val !== 'number' || !isNaN(val))
}