const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear(); // Get the current year

    return people.reduce((oldest, currentPerson) => {
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const currentAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;

        return currentAge > oldestAge ? currentPerson : oldest;

    })
};

// Do not edit below this line
module.exports = findTheOldest;
