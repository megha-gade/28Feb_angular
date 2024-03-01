import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmpServiceService } from './service/emp-service.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

//'inside array value should be same as api keys in db.json file'
  displayedColumns: string[] =
['id',
'fname',
'lname',
'email',
'dob',
'gender',
'education',
'company',
'experience',
'package',
'action'
];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;






constructor(private _dialog:MatDialog,private service:EmpServiceService)
{

}

ngOnInit(): void {
//'to get data when project start'
this.FetchAllEmployee();
}


//''FetchAll
FetchAllEmployee() {

this.service.fetchAllEmployeeList().subscribe({
next:(res:Employee[])=>{
this.dataSource=new MatTableDataSource(res);
this.dataSource.paginator=this.paginator;
this.dataSource.sort=this.sort;
}
})

}



//'this is for that add emp pop up form ui'
openAaddEditEmpForm()
{
const dilogRef=this._dialog.open(EmpAddEditComponent)
dilogRef.afterClosed().subscribe(
{
next:(val)=>{
if(val)
{
this.FetchAllEmployee();
  }
}
}
)

}






applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}





deleetEmployee(id:string)
{
this.service.deleteEmployee(id).subscribe(res=>
  {alert('employee has been deleted');
//'after deleting refresh the ui'
this.FetchAllEmployee();
})
}







editEmployee(data:Employee)
{
  const dilogRef=this._dialog.open(EmpAddEditComponent,
    {
// data:data===same as just data
      data,
    })

    dilogRef.afterClosed().subscribe(
      {
      next:(val)=>{
      if(val)
      {
      this.FetchAllEmployee();
        }
      }
      })
}

}
