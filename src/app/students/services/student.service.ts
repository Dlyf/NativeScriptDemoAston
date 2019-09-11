import { Injectable } from "@angular/core";
import { Student } from "../models/student.model";

@Injectable({
    providedIn: "root"
})
export class StudentService {
    students: Student[] = [
        new Student('Francesco', 'Totti'),
        new Student('François', 'Tout'),
        new Student('Frances', 'Todo'),
    ];

    getStudents(): Student[] {
        return this.students;
    }
}
