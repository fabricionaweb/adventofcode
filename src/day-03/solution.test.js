import { EOL } from "os"
import { suite } from "uvu"
import * as assert from "uvu/assert"
import { countTrees, multiply } from "./solution.js"

const test = suite("Day 3: Toboggan Trajectory")

test("should return 0", () => {
  assert.is(countTrees(1, 1, []), 0)
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
.#..#...#.#`.split(EOL)

  assert.is(countTrees(3, 1, input), 7)
})

test("should return 0", () => {
  const input = `\
...........
...........
...........
...........`.split(EOL)

  assert.is(countTrees(3, 1, input), 0)
})

test("should return 5", () => {
  const input = `\
#..........
...#.......
......#....
.........#.
.#.........`.split(EOL)

  assert.is(countTrees(3, 1, input), 5)
})

// provided
test("should return [2,7,3,4,2] and 336", () => {
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
.#..#...#.#`.split(EOL)

  const slopes = [
    countTrees(1, 1, input),
    countTrees(3, 1, input), // part 1
    countTrees(5, 1, input),
    countTrees(7, 1, input),
    countTrees(1, 2, input),
  ]

  assert.equal(slopes, [2, 7, 3, 4, 2])
  assert.is(slopes.reduce(multiply), 336)
})

test("should return [5,0] and 5", () => {
  const input = `\
..#........
.#.........
..#........
...#.......
....#......`.split(EOL)

  const slopes = [countTrees(1, 1, input), countTrees(2, 1, input)]

  assert.equal(slopes, [4, 0])
  assert.is(slopes.reduce(multiply), 4)
})

test.run()
