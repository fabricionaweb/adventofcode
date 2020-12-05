import { readFileSync } from "fs"
import { EOL } from "os"

const input = readFileSync(new URL("./input", import.meta.url), "utf-8")

const TREE = "#"

export function part1(list = input, right = 3) {
  let pos = 0
  return list.split(EOL).reduce((trees, row) => {
    const char = row[pos % row.length]
    pos += right
    return (trees += char === TREE)
  }, 0)
}

export function part2(right, down, list = input) {
  const path = list.split(EOL)
  const limit = path[0].length
  let trees = 0

  for (let y = 0, x = 0; y < path.length; y += down) {
    trees += path[y][x % limit] === TREE
    x += right
  }

  return trees
}
