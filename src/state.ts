import { createInterface, type Interface } from "node:readline";

export type CLICommand = {
  name: string;
  description: string;
callback: (commands: Record<string, CLICommand>) => void;
//   callback: (state: State) => void;
};

// export type State = {
//   readline: Interface;
//   commands: Record<string, CLICommand>;
// };

export function initState () {
    const a = createInterface
}