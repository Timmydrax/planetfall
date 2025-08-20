import { words } from "./words";

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export function getFarewellText(planet) {
  const options = [
    `Farewell, ${planet}`,
    `Adios, ${planet}`,
    `R.I.P., ${planet}`,
    `We'll miss you, ${planet}`,
    `Oh no, not ${planet}!`,
    `${planet} bites the dust`,
    `Gone but not forgotten, ${planet}`,
    `The end of ${planet} as we know it`,
    `Off into the sunset, ${planet}`,
    `${planet}, it's been real`,
    `${planet}, your watch has ended`,
    `${planet} has left the building`,
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
