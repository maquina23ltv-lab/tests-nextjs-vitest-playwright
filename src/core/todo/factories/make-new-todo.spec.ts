import { makeNewTodo } from "./make-new-todo"

describe("makeNewTodo (unit)", () => {
    describe("makeNewTodo", () => {
        test("Deve retornar um novo todo válido", () => {
            const expectedTodo = {
            id: expect.any(String),
            description: "Meu novo todo",
            createdAt: expect.any(String),
        };

    const newTodo = makeNewTodo("Meu novo todo");

    expect(newTodo.description).toBe(expectedTodo.description);

    expect(newTodo).toStrictEqual(expectedTodo);
});
});
});