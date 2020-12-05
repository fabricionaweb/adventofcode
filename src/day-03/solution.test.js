import { suite } from "uvu"
import * as assert from "uvu/assert"
import { part1, part2 } from "./solution.js"

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
.#..#...#.#`

  const slopes = [
    part2(1, 1, input),
    part2(3, 1, input), // part 1
    part2(5, 1, input),
    part2(7, 1, input),
    part2(1, 2, input),
  ]
  const trees = slopes.reduce((acc, curr) => acc * (curr || 1))

  assert.equal(slopes, [2, 7, 3, 4, 2])
  assert.is(trees, 336)
})

test.only("should return [5,0] and 5", () => {
  const input = `\
..#........
.#.........
..#........
...#.......
....#......`

  const slopes = [part2(1, 1, input), part2(2, 1, input)]
  const trees = slopes.reduce((acc, curr) => acc * (curr || 1))

  assert.equal(slopes, [4, 0])
  assert.is(trees, 4)
})

test.run()
