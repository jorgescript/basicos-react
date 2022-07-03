const getUser = () => ({ uid: "ABC123", username: "jorgescript" });
const getUserActive = (name) => ({ uid: "ABC123", username: name });

describe("Pruebas en funciones", () => {
  test("Prueba en la funcion getUser", () => {
    const testUser = { uid: "ABC123", username: "jorgescript" };
    const user = getUser();
    expect(testUser).toEqual(user);
  });

  test("Prueba en funcion getUserActive", () => {
    const testUser = { uid: "ABC123", username: "jorgescript" };
    const user = getUserActive("jorgescript");
    expect(testUser).toEqual(user);
  });
});
