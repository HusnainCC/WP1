import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  imports:[CommonModule, FormsModule],
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  
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
  ]; // Fetch this from backend

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadEmployee(id);
    }
  }

  loadEmployee(id: string): void {
    this.employeeService.getEmployeeById(Number(id)).subscribe({
      next: (data) => {
        this.employee = data;
      },
      error: (err) => {
        console.error('Error loading employee', err);
        alert('Error loading employee');
      }
    });
  }

  updateEmployee(): void {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee).subscribe({
        next: () => {
          alert('Employee updated successfully');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Error updating employee', err);
          alert('Error updating employee');
        }
      });
    }
  }
}
