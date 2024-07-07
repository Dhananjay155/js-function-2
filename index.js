function objectFactory(fname, age) {
    age = Number(age);
    return { [fname]: age };
}

console.log(objectFactory("John", "25")); 


function gradeClassifier(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(gradeClassifier(85)); 



function stringManipulator(str1, str2) {
    
    if (str1 === "" || str2 === "") {
        return str1 + str2;
    }

    if (str1.length === str2.length) {
        return str1 + str2;
    } else if (str1.length > str2.length) {
        return str1 + str2;
    } else {
        return str2 + str1;
    }
}

console.log(stringManipulator("hello", "world")); 