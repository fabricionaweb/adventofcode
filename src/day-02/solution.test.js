import { suite } from "uvu"
import * as assert from "uvu/assert"
import { part1 } from "./solution.js"

const test = suite("Day 2: Password Philosophy")

test("should return 0", () => {
  assert.is(part1(""), 0)
  assert.is(part1("invalid input"), 0)
})

// provided
test("should return 2", () => {
  const input = `
    1-3 a: abcde\
    1-3 b: cdefg \
    2-9 c: ccccccccc`
  assert.is(part1(input), 2)
})

test("should return 2", () => {
  const input = `1-1 a: abcde\
    2-3 b: babab
    2-3 c: cacacaca   \
    1-4 d: dddac \
  `
  assert.is(part1(input), 3)
})

test.run()
