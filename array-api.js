// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  //   for (let fruit of fruits) {
  //     console.log(fruit);
  //   }
  console.log(fruits.toString());
  console.log(fruits.join(","));
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  arr = [];
  for (let fruit of fruits) {
    if (fruit != "," && fruit != " ") {
      arr.push(fruit);
    } else {
      continue;
    }
  }
  console.log("arr", arr);
  const result = fruits.split(",");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //console.log(array.splice(2));
  const result = array.slice(2, 5);
  console.log("result", result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  for (student of students) {
    if (student.score === 90) {
      console.log(student);
    }
  }

  const result = students.find((student) => student.score === 90);
  console.log("find", result);
}

// Q6. make an array of enrolled students
{
  student_arr1 = [];
  for (student of students) {
    if (student.enrolled === true) {
      student_arr1.push(student.name);
    }
  }
  console.log(student_arr1);

  const result2 = students.filter((student) => student.enrolled);
  console.log("result2", result2);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  number_arr = [];
  for (student of students) {
    if (student.score !== 0) {
      number_arr.push(student.score);
    }
  }
  console.log(number_arr);

  const result3 = students.map((student) => student.score);
  console.log("result3", result3);
}

// Q8. check if there is a student with the score lower than 50
{
  number_arr2 = [];
  for (student of students) {
    if (student.score < 50) {
      number_arr2.push(student.name);
    }
  }
  console.log("lower than50", number_arr2);

  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score < 50); //모든 배열의 조건을 체크할 때 사용
  console.log(result2);
}

// Q9. compute students' average score
{
  let sum = 0;
  let avg;
  for (student of students) {
    sum += student.score;
  }
  avg = sum / students.length;
  console.log("avg", avg);

  console.clear();
  // //reduceRight는 배열 뒤에서부터 동작함
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  //1
  result = [];
  for (student of students) {
    final = result.push(student.score);
  }
  console.log(result.toString());

  //2
  console.clear();
  const result4 = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();

  console.log(result4);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result5 = students
    .map((student) => student.score)
    .sort((a, b) => a - b) //오름차순으로 설정 , 내림차순으로 하려면 b-a로 하면 됨
    .join();
  console.log(result5);
}
