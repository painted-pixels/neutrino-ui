namespace NodeJS {
  export interface Global {
    document: Document;
    window: DOMWindow;
    navigator: Partial<Navigator>;
  }
}
