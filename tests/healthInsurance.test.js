const healthInsuranceModel = require("../src/models/healthInsuranceModel")

describe("GET model test", () => {
    const healthInsurance = new healthInsuranceModel({
        "name": "Health Insurance test",
        "phoneNumber": "1122223333",
        "transSurgery": true,
        "description": "A Health Insurance for tests"
    });
    it("Must access the schema and return the correct name of the health insurance", () => {
        expect(healthInsurance.name).toBe("Health Insurance test");
    });
    it("Must access the schema and return the correct phoneNumber of the health insurance", () => {
        expect(JSON.stringify(healthInsurance.phoneNumber)).toBe("1122223333")
    });
    it("Must access the schema and return the value of trans surgery as true", () => {
        expect(healthInsurance.transSurgery).toBe(true);
    });
    it("Must access the schema and return the correct description of the health insurance", () => {
        expect(healthInsurance.description).toBe("A Health Insurance for tests")
    })
})

describe("CREATE route test", () => {
    const healthInsurance =  new healthInsuranceModel({
        "name": "Health Insurance test",
        "phoneNumber": "1122223333",
        "transSurgery": true,
        "description": "A Health Insurance for tests"
    });
    it("Must save the new health insurance in the database", () => {
        healthInsurance.save().then((date) => {
            expect(date.name).toBe("Health Insurance test")
        })
    })
})

describe("UPDATE route test", () => {
    it("Must edit the title and save it in the database", () => {
    const healthInsurance = new healthInsuranceModel({
        "name": "Health Insurance test",
        "phoneNumber": "1122223333",
        "transSurgery": true,
        "description": "A Health Insurance for tests"
    });
    healthInsurance.name = "A new Health Insurance"
    healthInsurance.save().then((date) => {
        expect(date.name).toBe("A new Health Insurance")
    })
})
})

describe("DELETEa route test", () => {
    it("Must delete a Health Insurace", () => {
    const healthInsurance = new healthInsuranceModel({
        "name": "Health Insurance test",
        "phoneNumber": "1122223333",
        "transSurgery": true,
        "description": "A Health Insurance for tests"
    });
    healthInsurance.save().then((date) => {
        date.name = "Health Insurance test"
        healthInsurance.delete().then((newDate) => {
            expect(date.name).toBe(null)
        })
    })    
    })
})