import { suite } from "uvu"
import * as assert from "uvu/assert"
import { part1 } from "./solution.js"

const test = suite("Day 3: Toboggan Trajectory")

test("should return 0", () => {
  assert.is(part1(""), 0)
})

// provided
test("should return 7", () => {
  const input = `\
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`

  assert.is(part1(input), 7)
})

test("should return 0", () => {
  const input = `\
...........
...........
...........
...........`

  assert.is(part1(input), 0)
})

test("should return 5", () => {
  const input = `\
#..........
...#.......
......#....
.........#.
.#.........`

  assert.is(part1(input), 5)
})

test.run()
