import { readFileSync } from "fs"

const input = readFileSync(new URL("./input", import.meta.url), "utf-8")

const REGEX = /(\d+)-(\d+)\s(\w+):\s?(\w+)\s?/g

export function part1(list = input) {
  const lines = list.matchAll(REGEX) // returns iterator

  return [...lines].reduce((acc, [_, min, max, char, pass]) => {
    const times = pass.match(new RegExp(char, "g"))?.length || 0
    const isValid = times >= min && times <= max

    return acc + isValid
  }, 0)
}
