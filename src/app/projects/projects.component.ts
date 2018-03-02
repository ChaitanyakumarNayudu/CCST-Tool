import { Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort, MatDialog} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {ProjectListService} from '../services/projectsList.service';
import {ProjectEditComponent} from '../projects/project-edit/project-edit.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{
  dialogResult ="";
  projetList:any[] = [];
  displayedColumns = ['projectID', 'projectName', 'clientName','actions'];
  dataSource = new MatTableDataSource<any>() ;
  selection = new SelectionModel<Element>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
   
  }

  ngOnInit(){
    this.service.getProjectsList().subscribe(res =>{
      this.projetList = res.projects;
      this.dataSource = res.projects;
    } );

  
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;

   
  }
  selectRow(row) {
    console.log(row);
  }
 

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  constructor(private dialog:MatDialog,private service:ProjectListService) {
    
   }
   openDialog(){
     let dialogRef=this.dialog.open(ProjectEditComponent,{
          width:'600px',
          data:'{{}}'
     });

     dialogRef.afterClosed().subscribe(result=>{
       console.log('dialog Closed: ${result}');
       this.dialogResult=result;
     })
   }
  }
  export interface Element {
    projectID:number,
    projectName:string,
    clientName: string
    
  }

 