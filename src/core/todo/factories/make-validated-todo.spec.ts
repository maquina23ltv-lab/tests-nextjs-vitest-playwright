import * as sanitizeStrMod from "@/utils/sanitize-str";
import { makeValidatedTodo } from "./make-validated-todo";

describe("makeValidatedTodo (unit)", () => {
  test("deve chamar a função sanitizeStr com o valor correto", () => {
    const description = "abcd";
    const sanitizeStrSpy = vi
      .spyOn(sanitizeStrMod, "sanitizeStr")
      .mockReturnValue(description);

    makeValidatedTodo(description);

    expect(sanitizeStrSpy).toHaveBeenCalledExactlyOnceWith(description);
    expect(sanitizeStrSpy).toHaveBeenCalledTimes(1);
    expect(sanitizeStrSpy).toHaveBeenCalledWith(description);
  });

  test("deve chamar validateTodoDescription com o retorno de sanitizeStr", () => {});

  test("deve chamar makenewTodo se validatedDescription retornou sucesso ", () => {});

  test("deve chamar retornar validatedDescription.errors se a validação falhou", () => {});
});
