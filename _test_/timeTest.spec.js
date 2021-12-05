//import the js file to test
import { today } from "./time";

describe("Testing functionality", () => {
    test("Testing the today() function", () => {
        expect(today).toBeDefined();
    })
});
