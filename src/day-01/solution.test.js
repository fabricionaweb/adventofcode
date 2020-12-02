import { suite } from "uvu"
import * as assert from "uvu/assert"
import { solution } from "./solution.js"

const test = suite("Day 1: Report Repair")

test("should return 0", () => {
  assert.is(solution(false, ""), 0)
})

// provided
test("should return 514579", () => {
  // 1721 * 299
  const input = `
    1721
    979
    366
    299
    675
    1456`

  assert.is(solution(false, input), 514579)
})

test("should return 4036", () => {
  const input = `
    2018
    2
  `
  assert.is(solution(false, input), 4036)
})

// provided
test("should return 241861950", () => {
  // 979 * 366 * 675
  const input = `
    1721
    979
    366
    299
    675
    1456`

  assert.is(solution(true, input), 241861950)
})

test("should return 12090", () => {
  const input = `
    2015
    3
    2`

  assert.is(solution(true, input), 12090)
})

test.run()
