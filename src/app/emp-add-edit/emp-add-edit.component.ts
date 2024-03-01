import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpServiceService } from '../service/emp-service.service';
import { Employee } from '../model/employee';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.css'
})
export class EmpAddEditComponent {

empForm:FormGroup;
education:string[]=[
"Bsc",
"EXTC",
"Commerse",
"Arts"
]


constructor
(private _fb:FormBuilder,
  private service:EmpServiceService,
  private dialogRef:MatDialogRef<EmpAddEditComponent>,
  @Inject(MAT_DIALOG_DATA)public data:any
  )
{
this.empForm=_fb.group({
fname:'',
lname:'',
email:'',
dob:'',
gender:'',
education:'',
company:'',
experience:'',
package:'',

})
}



ngOnInit(): void {
this.empForm.patchValue(this.data)

}


//'on form submit'
onSubmit()
{


if(this.data)

{console.log(this.empForm.value);
  //'update Employee'
  this.service.updateEmployee(this.data.id,this.empForm.value).subscribe(res=>
  {

  console.log(res);
  alert(res.fname + ' Updated...!');
  this.dialogRef.close(true);

  })}


else{
  console.log(this.empForm.value);
  //'add Employee'
  this.service.addEmployee(this.empForm.value).subscribe(res=>
  {
  console.log('The vaue has been added successfully'+res);
  console.log(res);
  alert("Employee Added Successfully...!"+ res);
  this.dialogRef.close(true);
  })
}


}





}
