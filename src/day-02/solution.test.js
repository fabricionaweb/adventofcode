import { suite } from "uvu"
import * as assert from "uvu/assert"
import { part1, part2 } from "./solution.js"

const test = suite("Day 2: Password Philosophy")

test("should return 0", () => {
  assert.is(part1(""), 0)
  assert.is(part1("invalid input"), 0)
})

// provided
test("should return 2", () => {
  const input = `
    1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc
  `

  assert.is(part1(input), 2)
})

test("should return 5", () => {
  // {min}-{max}
  const valid = `
    1-1 a: ba

    1-2 b: bab
    1-2 b: baa

    2-3 c: cca
    2-3 c: cacc
  `
  const invalid = `
    1-1 a: aa

    1-2 b: aaaaa
    1-2 b: aabbb

    2-3 c: caaaa
    2-3 c: ccacc
  `

  assert.is(part1(valid + invalid), 5)
})

// provided
test("should return 1", () => {
  const input = `
    1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc
  `

  assert.is(part2(input), 1)
})

test("should return 4", () => {
  // {posA}-{posB}
  const valid = `
    1-2 a: ba
    1-2 a: ab

    2-3 b: abaa
    2-3 b: aaba
  `
  const invalid = `
    1-2 a: bb
    1-2 a: aa

    2-3 b: abba
    2-3 b: aaab
  `

  assert.is(part2(valid + invalid), 4)
})

test.run()
