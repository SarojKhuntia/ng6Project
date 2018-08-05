import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit{
  
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    comments: new FormControl(''),
    fruits: new FormControl(''),
  });

  myForm : FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit (){

    this.myForm = this.fb.group({
      firstName: '',
      lastName: '',
      comments: '',
      fruits: ''
    })

    //this.myForm.valueChanges.subscribe(console.log)
    console.log(this.myForm.value)

  }
  
}


