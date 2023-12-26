const {add, err} = require("../index")

test("toBe", () => {
    expect(add(1,3)).toBe(4)
})

test("toEqual", () => {
    expect(add(1,3)).toEqual(4)
})

test("toBeNull", () => {
    expect(add(1,3)).not.toBeNull()
})

test("toBeGreaterThan", () => {
    expect(add(1,3)).not.toBeGreaterThan(1)
})

test("toMatch", () => {
    expect(add("Hello", "World")).toMatch("Hello")
})

test("toThrow", () => {
    expect(() => err()).toThrow("New Error occured")
})

describe('I am block', () => {
  test('I am executing in a block', () => {
    expect(() => err()).toThrow("New Error occured")
  })
  test("toThrow", () => {
    expect(() => err()).toThrow("New Error occured")
  })
})
