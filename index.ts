import { Temporal } from "@js-temporal/polyfill";
import type { Student } from "./models/student.model.js";

const student: Student = {
    id: "STU-001",
    name: "Hana Tadesse",
    enrollmentDate: Temporal.Now.instant(),
};

// student.id = "STU-999"; // Error: id is readonly

console.log(student.gpa?.toFixed(2) ?? "Not yet graded");