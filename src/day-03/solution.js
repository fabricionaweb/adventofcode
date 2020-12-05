import { readFileSync } from "fs"
import { EOL } from "os"

const input = readFileSync(new URL("./input", import.meta.url), "utf-8")

const STEPS = 3
const TREE = "#"

export function part1(list = input) {
  let pos = 0
  return list.split(EOL).reduce((trees, row) => {
    const char = row[pos % row.length]
    pos = pos + STEPS
    return (trees += char === TREE)
  }, 0)
}
