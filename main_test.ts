import { expect } from "jsr:@std/expect"
import { dracula } from "./main.ts"

Deno.test(function draculaTypeOfTest() {
  const typeOfThoseFeratu = typeof dracula
  expect(typeOfThoseFeratu).toBe('object')
})

Deno.test(function draculaShades() {
  expect(dracula.darker).toEqual({
    "50": "#cdd0e4",
    "100": "#b5bad6",
    "200": "#9ea4c8",
    "300": "#888fb8",
    "400": "#727aa8",
    "500": "#5f6795",
    "600": "#53597c",
    "700": "#454a64",
    "800": "#373a4d",
    "900": "#282a36",
    DEFAULT: "#282a36"
  })
})
