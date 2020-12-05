import { readFileSync } from "fs"
import { EOL } from "os"

const input = readFileSync(new URL("./input", import.meta.url), "utf-8").split(EOL)

const TREE = "#"

export function countTrees(right, down, path = input) {
  let trees = 0

  for (let y = 0, x = 0; y < path.length; y += down) {
    trees += path[y][x % path[y].length] === TREE
    x += right
  }

  return trees
}

export const multiply = (acc, curr) => acc * (curr || 1)
