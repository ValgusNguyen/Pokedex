import { CLICommand} from "./state.js";

export function commandHelp(commands: Record<string, CLICommand>): void {
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  for (const [key, value] of Object.entries(commands)) {
    console.log(`${key}: ${value.description}`);
  }
  console.log();
}
