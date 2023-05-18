export interface User {
  id: number;
  name: string;
  description?: string;
}

export interface Pages {
  home: "home";
  start: "start";
  help: "help";
}
