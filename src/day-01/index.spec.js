import { suite } from "uvu"
import * as assert from "uvu/assert"
import { part1, part2 } from "./index.js"

const test = suite("Day 1: Report Repair")

test("should return 0", () => {
  assert.is(part1([]), 0)
})

// provided
test("should return 514579", () => {
  const input = [1721, 979, 366, 299, 675, 1456]
  assert.is(part1(input), 514579)
})

test("should return 4036", () => {
  const input = [2018, 2]
  assert.is(part1(input), 4036)
})

// provided
test("should return 241861950", () => {
  const input = [1721, 979, 366, 299, 675, 1456]
  assert.is(part2(input), 241861950)
})

test("should return 8064", () => {
  const input = [2016, 2, 2]
  assert.is(part2(input), 8064)
})

test.run()
