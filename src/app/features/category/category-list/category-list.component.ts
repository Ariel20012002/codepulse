import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule, FormsModule, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{

  categories$?: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
  }

  onSearch(query: string) {
    this.categories$ = this.categoryService.getAllCategories(query);
  }
}
