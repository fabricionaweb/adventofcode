import { readFileSync } from "fs"

const input = readFileSync(new URL("./input", import.meta.url), "utf-8")

const REGEX = /(\d+)-(\d+)\s(\w+):\s?(\w+)\s?/g

export function part1(list = input) {
  const lines = list.matchAll(REGEX) // returns iterator

  return [...lines].reduce((acc, [_, min, max, char, pwd]) => {
    const times = pwd.match(new RegExp(char, "g"))?.length || 0
    const isValid = times >= min && times <= max

    return acc + isValid
  }, 0)
}

export function part2(list = input) {
  const lines = list.matchAll(REGEX)

  return [...lines].reduce((acc, [_, indexA, indexB, char, pwd]) => {
    const isValidA = pwd.charAt(indexA - 1) === char
    const isValidB = pwd.charAt(indexB - 1) === char

    return acc + (isValidA ^ isValidB)
  }, 0)
}
