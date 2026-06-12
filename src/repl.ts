import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
    let cleaned = input.trim().toLowerCase();
    let result = cleaned.split(" ").filter(w => w.length > 0);
    return result;
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
  })

  rl.prompt()

  rl.on('line', async (command: string)  => {
    if (cleanInput(command).length === 0) {
      rl.prompt()
      return;
    } else {
      const commandName = cleanInput(command)[0]
      //getCommands()
      const commands = getCommands()
      if ( commandName in getCommands()) {
        try {
          commands[commandName].callback(commands)
        } catch (e) {
          console.log(e)
        }
        rl.prompt()
        return
      }
      console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`,);
      rl.prompt()
    } 
}
  )}
