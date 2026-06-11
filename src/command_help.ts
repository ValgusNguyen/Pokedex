import { type State } from "./state.js";

export function commandHelp(state: State): void {
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  for (const [key, value] of Object.entries(state.commands)) {
    console.log(`${key}: ${value.description}`);
  }
  console.log();
}
