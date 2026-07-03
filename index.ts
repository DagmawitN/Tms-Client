import { isStudent, parseStudent } from "./models/student.model.js";
import type { Student } from "./models/student.model.js";

function processStudent(raw: unknown) {
    if (isStudent(raw)) {
        const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
        console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
    } else {
        console.error("Invalid student data received");
    }
}

// ===== TESTS =====

// Test 1: Valid student
// processStudent({
//     id: "STU-001",
//     name: "Hana",
//     gpa: 3.7
// });

// // Test 2: Invalid input (number)
// processStudent(42);

// // Test 3: Missing name
// processStudent({
//     id: "STU-002"
// });

// // Test 4: Wrong id type
// processStudent({
//     id: 123,
//     name: "Sara"
// });

console.log(parseStudent({ id: "STU-001", name: "Hana" }));
// Prints a valid Student object
parseStudent({ id: 42, name: "Test" });