#!/usr/bin/env node
var keypairs = require('ripple-keypairs')

const secret = keypairs.generateSeed()
const keypair = keypairs.deriveKeypair(secret)
const account = keypairs.deriveAddress(keypair.publicKey)
console.log({
  secret,
  account,
  keypair
})
