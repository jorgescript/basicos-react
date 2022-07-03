const getUser = () => ({ uid: "ABC123", username: "jorgescript" });
const getUserActive = (name) => ({ uid: "ABC123", username: name });
const returnArray = () => ["ABC", 123];
const getPokemon = async (idPokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
    const res = await fetch(url);
    const data = await res.json();
    const { name } = data;
    return name;
  } catch (error) {
    return "No existe el pokemon";
  }
};

describe("Pruebas en funciones", () => {
  test("Prueba en la funcion getUser", () => {
    const testUser = { uid: "ABC123", username: "jorgescript" };
    const user = getUser();
    expect(user).toEqual(testUser);
  });

  test("Prueba en funcion getUserActive", () => {
    const testUser = { uid: "ABC123", username: "jorgescript" };
    const user = getUserActive("jorgescript");
    expect(user).toEqual(testUser);
  });

  test("Debe retornar un arreglo de un string y un numero", () => {
    const [letters, numbers] = returnArray();
    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });

  test("Prueba de la funcion getPokemon", async () => {
    const bulbasaur = await getPokemon(1);
    expect(bulbasaur).toBe("bulbasaur");
  });
});
