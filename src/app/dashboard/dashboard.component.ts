// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, FormsModule]
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  // Local departments list (could be fetched from API too)
  departments = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Finance' }
  ];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  // Load all employees
  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load employees';
        this.isLoading = false;
      }
    });
  }

  // Get department name from deptId
  getDepartmentName(deptId: number): string {
    const department = this.departments.find(d => d.id === deptId);
    return department ? department.name : 'Unknown';
  }

  // Create new employee
  createEmployee(): void {
    this.router.navigate(['/add-employee']);
  }

  // Edit an employee
  editEmployee(id: number): void {
    this.router.navigate(['/update-employee', id]);
  }

  // Delete an employee
  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          this.employees = this.employees.filter(employee => employee.id !== id);
        },
        error: (err) => {
          this.errorMessage = 'Failed to delete employee';
        }
      });
    }
  }
}
