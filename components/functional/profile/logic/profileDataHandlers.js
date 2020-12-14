export const profileDataJoiner = (personal, physical, details) =>{
    const result = {
        name: personal.name,
        age: personal.age,
        sex: false,
        profession: details.profession,
        place_of_residence: details.place_of_residence,
        growth: physical.growth,
        weight: physical.weight,
        level_of_fitness: physical.level_of_fitness
    }
    return result
}
export const profileDataSeparator = (profile) =>{
    let personal = {
        name: profile.name,
        age: profile.age,
        sex: profile.sex,
    }

    let physical = {
        growth: profile.growth,
        weight: profile.weight,
        level_of_fitness: profile.level_of_fitness
    }
    let details = {
        profession: profile.profession,
        place_of_residence: profile.place_of_residence
    }

    return {personal, physical, details};
}


