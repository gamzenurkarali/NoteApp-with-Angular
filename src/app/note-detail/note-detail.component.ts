import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { NOTES } from 'src/notes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-note-detail',
  standalone: true,
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
  imports: [RouterModule, CommonModule],  
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);  
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  get noteExists(): boolean {
    return this.note !== undefined;   
  }
}
