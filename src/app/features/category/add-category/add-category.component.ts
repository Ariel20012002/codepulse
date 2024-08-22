import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy{

  model: AddCategoryRequest;
  private addCategorySubscribtion?: Subscription;

  constructor(private categoryService: CategoryService) {
    this.model = {
      name: '',
      urlHandle: ''
    }
  }

  onFormSubmit() {
    this.addCategorySubscribtion = this.categoryService.addCategory(this.model)
    .subscribe({
      next: (response) => {
        console.log('¡Fue un exito!');
      }
    })
  }

  ngOnDestroy(): void {
    this.addCategorySubscribtion?.unsubscribe();
  }

}
