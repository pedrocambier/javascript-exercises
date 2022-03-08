const findTheOldest = function(people) {
  const oldest = people.reduce((prevPerson, nextPerson) => {
    let prevPersonAge = 0;
    let nextPersonAge = 0;
    const thisYear = new Date().getFullYear();
    prevPersonAge =  ("yearOfDeath" in prevPerson) ? prevPerson.yearOfDeath - prevPerson.yearOfBirth : thisYear - prevPerson.yearOfBirth;
    nextPersonAge =  ("yearOfDeath" in nextPerson) ? nextPerson.yearOfDeath - nextPerson.yearOfBirth : thisYear - nextPerson.yearOfBirth;
    return (prevPersonAge > nextPersonAge ? prevPerson : nextPerson);
  });
  return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
