// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe("sayHello", function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function")
    });
    it('should return a Boolean when called upon', function () {
        expect(typeof isFive()).toBe("boolean")
    });
    it('should return true when 5 is passed', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return false when "5" is passed', function () {
        expect(isFive("5")).toBe(false)
    });
});











//- Assert that isEven:
//    - returns a boolean no matter the input
//- returns true when executed with `isEven(2)`
//- returns true when executed with `isEven(-4)`
//- returns false when executed with `isEven(3)`
//- returns false when called with `isEven("banana")`
//- returns true when called with `isEven("8")`
//- returns false when called with `isEven(Infinity)`
//- return false when called with a boolean input like `isEven(true)` or `isEven(false)`
//- returns false when called without an argument like `isEven()`

describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean no matter the input', function () {

    });





});
