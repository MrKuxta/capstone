//import the js file to test
import { today } from "../src/client/js/time";

describe("Testing functionality", () => {
    test("Testing the today() function", () => {
        expect(today).toBeDefined();
    })
});
