/// <reference types="vite/client" />

// CSS modules
declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.scss" {
  const content: string;
  export default content;
}

// GSAP SplitText types
declare module "gsap/all" {
  export * from "gsap";

  export class SplitText {
    constructor(
      target: string | Element | Element[],
      vars?: {
        type?: string;
        linesClass?: string;
        wordsClass?: string;
        charsClass?: string;
        position?: string;
        absolute?: boolean;
        reduceWhiteSpace?: boolean;
        [key: string]: any;
      }
    );

    chars: Element[];
    words: Element[];
    lines: Element[];

    revert(): void;
    split(vars?: object): void;

    static create(
      target: string | Element | Element[],
      vars?: object
    ): SplitText;
  }

  export class ScrollTrigger {
    static create(vars: object): ScrollTrigger;
    static refresh(): void;
    static update(): void;
    [key: string]: any;
  }
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.mp4" {
  const value: string;
  export default value;
}
