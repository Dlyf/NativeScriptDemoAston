import { Component } from "@angular/core";
import { Student } from "./models/student.model";
import { StudentService } from "./services/student.service";

@Component({
    selector: 'student-list',
    templateUrl:'./student-list.component.html'
})
export class StudentListComponent {
    message: string = 'Simple message';
    students: Student[] = [];

    constructor(private studentService: StudentService) {
        this.updateStudentList();
    }

    changeMessage() {
        this.message = 'Message modifié';
    }

    updateStudentList() {
        this.students = this.studentService.getStudents();

    }
}
