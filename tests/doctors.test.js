const doctorsModel = require("../src/models/doctorsModel")

describe("GET model test", () => {
    const doctor = new doctorsModel({
        "name": "Igor",
        "age": "33",
        "service": ["Personal", "online"],
        "publicPrivateHealthInsurance": [true, false, true],
        "city": "Rio de Janeiro",
        "about": "About test",
        "phoneNumber": "3322221111",
        "gender": "Male",
    });
    it("Must access the schema and return the correct name of the doctor", () => {
        expect(doctor.name).toBe("Igor");
    });
    it("Must access the schema and return the correct age of the doctor", () => {
        expect(JSON.stringify(doctor.age)).toBe("33")
    });
    it("Must access the schema and return the correct service of the doctor", () => {
        expect(doctor.service).toStrictEqual(["Personal", "online"])
    });
    it("Must access the schema and return the value true, false and true", () => {
        expect(doctor.publicPrivateHealthInsurance).toStrictEqual([true, false, true])
    });
    it("Must access the schema and return the correct city of the doctor", () => {
        expect(doctor.city).toBe("Rio de Janeiro")
    });
    it("Must access the schema and return the correct about of the doctor", () => {
        expect(doctor.about).toBe("About test")
    });
    it("Must acces the schema and return the correct phone number of the doctor", () => {
        expect(JSON.stringify(doctor.phoneNumber)).toBe("3322221111")
    });
    it("Must access the schema and return the correct gender of the doctor", () => {
        expect(doctor.gender).toBe("Male")
    });
})

describe("CREATE route test", () => {
    const doctor = new doctorsModel({
        "name": "Igor",
        "age": "33",
        "service": ["Personal", "online"],
        "publicPrivateHealthInsurance": [true, false, true],
        "city": "Rio de Janeiro",
        "about": "About test",
        "phoneNumber": "3322221111",
        "gender": "Male",
    });
    it("Must save the new doctor in the database",() => {
        doctor.save().then((date) => {
            expect(date.name).toBe("Igor")
        })
    })
})

describe("UPDATE route test", () => {
    it("Must edit the title and save in the database", () => {

        const doctor = new doctorsModel({
        "name": "igor",
        "age": "33",
        "service": ["Personal", "online"],
        "publicPrivateHealthInsurance": [true, false, true],
        "city": "Rio de Janeiro",
        "about": "About test",
        "phoneNumber": "3322221111",
        "gender": "Male",
    });
    doctor.name = "New doctor test"
    doctor.save().then((date) => {
        expect(date.name).toBe("New Doctor test")
    })
    })
})

describe("DELETE route test", () => {
    it("Must delete a doctor", () => {
        const doctor = new doctorsModel({
        "name": "igor",
        "age": "33",
        "service": ["Personal", "online"],
        "publicPrivateHealthInsurance": [true, false, true],
        "city": "Rio de Janeiro",
        "about": "About test",
        "phoneNumber": "3322221111",
        "gender": "Male",
    });
    doctor.save().then((date) => {
        date.name = "igor"
        doctor.delete().then((newDate) => {
            expect(date.name).toBe(null)
        })
    })
    })
})