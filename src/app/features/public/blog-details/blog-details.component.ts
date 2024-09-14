import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {
  url: string | null = null;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe({
      next: (params) => {
        this.url = params.get('url')
      }
    });

    // Fetch blog details by url
  }

}
