import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-image-pick',
  templateUrl: './image-pick.component.html',
  styleUrls: ['./image-pick.component.css']
})
export class ImagePickComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private apiService: ApiService){}

  @Input() banque = -1;
  form: FormGroup;
  uploadResponse;

  ngOnInit() {
    this.form = this.formBuilder.group({
      avatar: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('avatar', this.form.get('avatar').value);

    this.apiService.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
          console.log(res);
          this.apiService.registerImage(res.name, res.url, this.banque, res.width, res.height).subscribe( (resa) => {
            console.log(resa);
          });
      },
      (err) => {  
        console.log(err);
      }
    );
  }

}
