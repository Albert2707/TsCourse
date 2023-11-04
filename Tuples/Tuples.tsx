/* Tuples are a special type exclusive to TypeScript (they don't exist in JS)

Tuples are arrays of fixed length and ordered with specific types - like super rigid arrays.
*/

const color: [number, number, number] = [1, 2, 3];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// goodRes[0] = "200"
// goodRes.push(123);

const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];
