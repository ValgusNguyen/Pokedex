import { cleanInput } from "./repl.js";
import { describe, expect, test } from 'vitest'

describe.each([
  { input: "  hello  world  ", expected: ["hello", "world"] },
  { input: "Charmander Bulbasaur PIKACHU", expected: ["charmander", "bulbasaur", "pikachu"] },
])('cleanInput($input)', ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    cleanInput(input)
    expect(cleanInput(input)).toEqual(expected)
    for (let i in expected) {
        expect(cleanInput(input)[i]).toBe(expected[i]);
    }
  })
})