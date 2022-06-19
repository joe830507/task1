import universitiesReducer, {
  addUniversity,
  deleteUniversity,
  fetchUniversities,
} from "./universitiesSlice";

describe("universities reducer", () => {
  const initialState = {
    idCount: 1,
    data: [{ id: 1 }],
  };

  it("should handle initial state", () => {
    expect(universitiesReducer(undefined, { type: "unknown" })).toEqual({
      idCount: 0,
      data: [],
    });
  });

  it("Test addUniversity", () => {
    const actual = universitiesReducer(initialState, addUniversity());
    expect(actual.idCount).toBe(2);
    expect(actual.data[1].id).toBe(2);
  });

  it("Test deleteUniversity", () => {
    const actual = universitiesReducer(
      { idCount: 2, data: [{ id: 1 }, { id: 2 }] },
      deleteUniversity()
    );
    expect(actual.idCount).toBe(2);
    expect(actual.data[0].id).toBe(1);
  });
});
