//Javascript does not have built in support for OOP

//constructor functions
function House(bedrooms,bathrooms,numSqft) {
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.numSqft = numSqft
}

const firstHouse = new House(2,2,1000)
