import { sanitizeStr } from "./sanitize-str";

describe("sanitize (unit)", () => {
  test("retorna uma string vazia quando passada uma string falsy", () => {
    // @ts-expect-error testando a função sem parametros
    expect(sanitizeStr()).toBe("");
  });

  test("retorna uma string vazia quando recebe um valor que não é string", () => {
    // @ts-expect-error testando a função com tipagem incorreta
    expect(sanitizeStr(123)).toBe("");
  });

  test("faz o trimm da string", () => {
    expect(sanitizeStr(" a ")).toBe("a");
  });

  test("garante que a string é normalizada com NFC", () => {
    const original = "e\u0301";
    const expected = "é";
    console.log(original, expected);
    expect(expected).toBe(sanitizeStr(original));
  });
});
