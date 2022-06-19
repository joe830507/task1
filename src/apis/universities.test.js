import { getUniversities } from "./universities";

test("University Api Test", async () => {
  const data = await getUniversities({ country: "Australia" });
  expect(data.length).toBeGreaterThan(0);
  const keys = Object.keys(data[0]);
  expect(keys.includes("name")).toBe(true);
  expect(keys.includes("country")).toBe(true);
  expect(keys.includes("alpha_two_code")).toBe(true);
  expect(keys.includes("state-province")).toBe(true);
  expect(keys.includes("domains")).toBe(true);
  expect(keys.includes("web_pages")).toBe(true);
  expect(typeof data[0].domains).toBe("object");
  expect(typeof data[0].web_pages).toBe("object");
});
