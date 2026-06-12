// import { type State } from "./state.js";

import { CLICommand } from "./state.js";

export function commandExit(commands: Record<string, CLICommand>) {
  console.log("Closing the Pokedex... Goodbye!");
  // state.readline.close();
  process.exit(0);
}
