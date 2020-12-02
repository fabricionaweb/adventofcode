import { readFileSync } from "fs"
import { EOL } from "os"

const input = readFileSync(new URL("./input", import.meta.url), "utf-8")

const MATCH = 2020

const formatEntries = list =>
  list.split(EOL).reduce((map, entry) => {
    const kv = Number(entry)
    return map.set(kv, kv)
  }, new Map())

export function solution(part2, list = input) {
  const entries = formatEntries(list)
  const cache = []

  for (let [entry] of entries) {
    const diff = entries.get(MATCH - entry)

    if (diff && !part2) {
      return diff * entry
    }

    const [diff2, diff3] = cache.filter(i => entries.get(MATCH - entry - i))
    if (diff2 && diff3) {
      return diff2 * diff3 * entry
    }

    cache.push(entry)
  }

  return 0
}
