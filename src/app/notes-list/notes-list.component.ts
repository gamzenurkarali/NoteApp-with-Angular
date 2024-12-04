import { Component } from '@angular/core';
import { NOTES } from 'src/notes';   
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  imports: [RouterModule, CommonModule],  
})
export class NotesListComponent {
  notes = NOTES;   
}
