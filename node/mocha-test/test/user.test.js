const { expect } = require("chai");
const getUser = require("../user");

describe("getUser Function", function () {

    it("should return user information after 1 second", async function () {

        const user = await getUser();

        expect(user).to.have.property("id");
        expect(user).to.have.property("name");

        expect(user.id).to.equal(1);
        expect(user.name).to.equal("Mayur");

    });

});