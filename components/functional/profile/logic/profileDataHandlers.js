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
    console.log("joined:", result)
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
    let account = {
        points: profile.points
    }
    return {personal, physical, details, account};
}

export const placeOfResidenceToNumber = (place_of_residence) => {
    switch(place_of_residence) {
        case "metropolia":
            return 1
        case "wieś":
            return 2
        case "miasto":
            return 3
    }
    return 3
}

export const numberToPlaceOfResidence = (number) => {
    switch (number){
        case 1:
            return "metropolia"
        case 2:
            return "wieś"
        case 3:
            return "miasto"
    }
    return "miasto"
}

export const sexToBool = (sex) => {
  return sex !== "kobieta";
}

export const boolToSex = (data) => {
    if (!data)
        return "kobieta"
    return "mężczyzna"
}
