
let marks = [78, 45, -5, 92, 60, 101, 55, 38, 50, 80]; 

// Counters and trackers
let validCount = 0;
let passCount = 0;
let failCount = 0;
let totalSum = 0;

let highestMark = -Infinity;
let highestStudent = "";

let lowestMark = Infinity;
let lowestStudent = "";

// 1. Loop through the list
for (let i = 0; i < marks.length; i++) {
    let currentMark = marks[i];
    let studentNum = i + 1;

    // 2. Check for invalid marks
    if (currentMark < 0 || currentMark > 100) {
        console.log(`Student ${studentNum}: invalid mark, skipped`);
        continue; // Skip to the next student
    }

    // 3. Process valid marks
    validCount++;
    totalSum += currentMark;

    let grade = "";
    let status = "";

    // Grade and Pass/Fail determination
    if (currentMark >= 80) {
        grade = "A";
        status = "Pass";
        passCount++;
    } else if (currentMark >= 70) {
        grade = "B";
        status = "Pass";
        passCount++;
    } else if (currentMark >= 60) {
        grade = "C";
        status = "Pass";
        passCount++;
    } else if (currentMark >= 50) {
        grade = "D";
        status = "Pass";
        passCount++;
    } else {
        grade = "E";
        status = "Fail";
        failCount++;
    }

    console.log(`Student ${studentNum}: ${currentMark} - Grade ${grade} (${status})`);

    // 4. Track highest and lowest marks
    if (currentMark > highestMark) {
        highestMark = currentMark;
        highestStudent = `Student ${studentNum}`;
    }

    if (currentMark < lowestMark) {
        lowestMark = currentMark;
        lowestStudent = `Student ${studentNum}`;
    }
}

// 5. Calculate average using only valid marks
let average = totalSum / validCount;

// Print the summary
console.log("--------------------");
console.log(`Valid marks: ${validCount}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestMark} (${highestStudent})`);
console.log(`Lowest: ${lowestMark} (${lowestStudent})`); // Bonus requirement 