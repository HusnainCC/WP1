import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee: Employee = {
    id: 0,
    name: '',
    password: '',
    deptId: 0,
    department: { id: 0, name: '' }
  };

  departments = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Finance' }
  ];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  addEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error adding employee', err);
        alert('Error adding employee');
      }
    });
  }
}