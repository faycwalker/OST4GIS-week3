/* =====================
# Lab 1, Part 2 — Functions as Values
Functions can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function that *always* returns the number 1.
===================== */

var justOne = function(one) {
  return one = 1
};
console.log('justOne success:', justOne() === 1);

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

var isEven = function(num) {
  return num%2 === 0
};
console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that *always* returns false.
              Use functions "justOne" and "isEven" somehow in the definition.
===================== */

var justFalse = function(false) {
  return justOne === isEven
};
console.log('justFalse success:', justFalse() === false);

/* =====================
Instructions: Write a function that takes a boolean value and returns its opposite.
===================== */

  var not = function(x) {
    return !x
      };
console.log('not success:', not(true) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd
              Use functions "isEven" and "not" somehow in the definition.
===================== */

var isOdd = function(odd) {
  return odd!== isEven
};
console.log('isOdd success:', isOdd(4) === false);

/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
===================== */

var filterOutLessThan10 = function(aboveTen) {
  return aboveTen > 10
};
console.log('filterOutLessThan10 success:', filterOutLessThan10([4, 11]) === [11]);

/* =====================
Stretch goal
Instructions: Let's bring it all together. Write a function that filters a list with a predicate you provide. It takes:
              1. a list of values (to be filtered)
              2. a function that takes a value and returns true (to keep a number) or false (to toss it out)
===================== */
var array = [1,2,3,4,5,6,7]
var filterOutOdd = function(num) {
  if (num%2 === 0) {
    return num
}
};

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/*
if (typeof schools[i].GRADE_ORG === 'number') {
  schools[i].HAS_KINDERGARTEN = schools[i].GRADE_LEVEL < 1;
  schools[i].HAS_ELEMENTARY = 1 < schools[i].GRADE_LEVEL < 6;
  schools[i].HAS_MIDDLE_SCHOOL = 5 < schools[i].GRADE_LEVEL < 9;
  schools[i].HAS_HIGH_SCHOOL = 8 < schools[i].GRADE_LEVEL < 13;
} else {
  schools[i].HAS_KINDERGARTEN = schools[i].GRADE_LEVEL.toUpperCase().indexOf('K') >= 0;
  schools[i].HAS_ELEMENTARY = schools[i].GRADE_LEVEL.toUpperCase().indexOf('ELEM') >= 0;
  schools[i].HAS_MIDDLE_SCHOOL = schools[i].GRADE_LEVEL.toUpperCase().indexOf('MID') >= 0;
  schools[i].HAS_HIGH_SCHOOL = schools[i].GRADE_LEVEL.toUpperCase().indexOf('HIGH') >= 0;
}
}

// filter data
var filtered_data = [];
var filtered_out = [];
for (var i = 0; i < schools.length - 1; i++) {
// These really should be predicates!
isOpen = schools[i].ACTIVE.toUpperCase() == 'OPEN';
isPublic = (schools[i].TYPE.toUpperCase() !== 'CHARTER' ||
            schools[i].TYPE.toUpperCase() !== 'PRIVATE');
isSchool = (schools[i].HAS_KINDERGARTEN ||
            schools[i].HAS_ELEMENTARY ||
            schools[i].HAS_MIDDLE_SCHOOL ||
            schools[i].HAS_HIGH_SCHOOL);
meetsMinimumEnrollment = schools[i].ENROLLMENT > minEnrollment;
meetsZipCondition = acceptedZipcodes.indexOf(schools[i].ZIPCODE) >= 0;
filter_condition = (isOpen &&
                    isSchool &&
                    meetsMinimumEnrollment &&
                    !meetsZipCondition);

if (filter_condition) {
  filtered_data.push(schools[i]);
} else {
  filtered_out.push(schools[i]);
}
}
console.log('Included:', filtered_data.length);
console.log('Excluded:', filtered_out.length);
