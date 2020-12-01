import { suite } from "uvu"
import * as assert from "uvu/assert"
import { part1 } from "./index.js"

const test = suite("Day 1: Report Repair")

test("should return 0", () => {
  assert.is(part1([]), 0)
})

test("should return 514579", () => {
  const input = [1721, 979, 366, 299, 675, 1456]
  assert.is(part1(input), 514579)
})

test("should return 2019", () => {
  const input = [2019, 1]
  assert.is(part1(input), 2019)
})

test.run()
