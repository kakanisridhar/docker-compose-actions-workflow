import HomePage from "../pageobjects/home.page";

describe("homepage", function () {
    it("should display hello world", function () {
        HomePage.open();
        expect(HomePage.pageText).toHaveTextContaining(
            "Hello World! I have been seen"
        );
    });
});
