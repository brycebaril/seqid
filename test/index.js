"use strict";

var test = require("tape")

var SeqId = require("../seqid")

test("seeded", function (t) {
  var id = SeqId(0)
  t.equals(id.next(), 1)
  t.equals(id.next(), 2)
  t.equals(id.next(), 3)
  t.equals(id.next(), 4)
  t.equals(id.next(), 5)
  t.equals(id.next(), 6)
  t.end()
})

test("negative", function (t) {
  var id = SeqId(-100)
  t.equals(id.next(), -99)
  t.equals(id.next(), -98)
  t.equals(id.next(), -97)
  t.equals(id.next(), -96)
  t.equals(id.next(), -95)
  t.equals(id.next(), -94)
  t.end()
})

test("zero", function (t) {
  var id = SeqId(-2)
  t.equals(id.next(), -1)
  t.equals(id.next(), 0)
  t.equals(id.next(), 1)
  t.end()
})

test("boundaries", function (t) {
  var id = SeqId(Math.pow(2, 32) / 2)
  t.equals(id.next(), 1 + (Math.pow(2, 32) * -0.5))
  t.end()
})
