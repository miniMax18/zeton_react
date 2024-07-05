export interface Authentication {
  token: string;
}

export interface TokenAction {
  type: 'set' | 'clear';
  token: string;
}
