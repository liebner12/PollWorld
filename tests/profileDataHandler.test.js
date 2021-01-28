import {profileDataJoiner} from "../components/functional/profile/logic/profileDataHandlers";

let personal = {
    name: "Name",
    age: 51,
    sex: false,
}
let physical = {
    growth: 3,
    weight: 2,
    level_of_fitness: 1
}
let details = {
    profession: "Job",
    place_of_residence: "place_of_residence"
}

test("Test profile data joiner", ()=>{
    let result = profileDataJoiner(personal, physical, details)
    expect(result.name).toMatch(personal.name)
    expect(result.age).toBe(personal.age)
    expect(result.sex).toBe(personal.sex)
    expect(result.profession).toBe(details.profession)
}
)
