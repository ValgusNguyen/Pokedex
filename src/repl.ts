import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";
import { type State } from "./state.js";

export function cleanInput(input: string): string[] {
  let cleaned = input.trim().toLowerCase();
  let result = cleaned.split(" ").filter((w) => w.length > 0);
  return result;
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const state: State = {
    readline: rl,
    commands: getCommands(),
  };

  rl.prompt();
  rl.on("line", (command: string) => {
    if (cleanInput(command).length === 0) {
      rl.prompt();
    } else {
      const firstCommand = cleanInput(command)[0];
      if (firstCommand in state.commands) {
        state.commands[firstCommand].callback(state);
      } else {
        console.log("Unknown command");
      }
    }
    rl.prompt();
  });
}
