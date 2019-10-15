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
        expect(typeof isFive).toBe("function");
    });
    it('should return a Boolean when called upon', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when 5 is passed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when "5" is passed', function () {
        expect(isFive("5")).toBe(false);
    });
});


describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when executed with 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should be false when executed with 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should be false when executed with banana', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should be false when executed with 8', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should be false when executed with Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should be false when executed with 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should be false when executed with true of false', function () {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should be false when executed with "', function () {
        expect(isEven()).toBe(false);
    });
});


describe("isVowel", function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when execute a', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when execute A', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return true when execute y', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return true when execute 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return true when execute true or false', function () {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return true when execute banana', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return true when execute ""', function () {
        expect(isVowel()).toBe(false);
    });
});

describe("add", function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe("function");
    });
    it('should return a number as long as both inputs are numbers or strings containing numbers.', function () {
        expect(typeof add()).toBe("number");
    });
    it('should return 5 when execute 2, 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when execute -3, -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when execute "5", 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when execute "-4", "10"', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when execute "banana", "split"', function () {
        expect(add("banana", "split")).toBeNaN();
    });
    it('should return NaN when execute 2, "apples"', function () {
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN when execute add()', function () {
        expect(add()).toBeNaN();
    });
});