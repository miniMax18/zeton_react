export interface Authentication {
  token: string | null;
}

export interface TokenAction {
  type: "set" | "clear";
  token: string | null;
}
