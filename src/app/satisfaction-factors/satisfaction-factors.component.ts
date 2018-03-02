import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog} from '@angular/material';
import { SatifactionFactorEditComponent } from './satifaction-factor-edit/satifaction-factor-edit.component';


@Component({
  selector: 'app-satisfaction-factors',
  templateUrl: './satisfaction-factors.component.html',
  styleUrls: ['./satisfaction-factors.component.css']
})
export class SatisfactionFactorsComponent implements OnInit {
  dialogResult ="";
  displayedColumns = ['position', 'factor', 'description', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
   
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

  /* Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  editFactor(){
    let dialogRef=this.dialog.open(SatifactionFactorEditComponent,{
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
  factor: string;
  description:string;
  position: number;
  
}
const ELEMENT_DATA: Element[] = [
  {position: 1, factor:'Business Model Understanding',description:'Deep Experience in the customers need'},
  {position:2,factor:'Quality Of Deliverables',description:'Deliverables met all acceptance criteria'},
  {position:3,factor:'Meeting Deadlines',description:'Deliverables are accepted as meeting agreed to dates'},
  {position:4,factor:'Expense Control',description:'Expenses are clearlu outlined in advance and stay within budget'},
  {position:5,factor:'communications',description:'Communication flows smoothly,comprehensively and accurately'},
  {position:6,factor:'Responsiveness',description:'Efficient and timely completion of client requests '},
  {position:7,factor:'Foresight',description:'Practiv anticipation of client needs'},
  {position:8,factor:'Knowledge Transfer',description:'effective transferal of information and knowledge'},
  {position:9,factor:'Behavior',description:'meeting all expectations of standards of reliability,integrity and professionalism'},
  {position:10,factor:'Team Play',description:'Effective embodiment of team goals-behavior and attitude'},
  {position:11,factor:'Autonomy',description:'Operational Effectiveness with minimal client interaction and disruption'},
  {position:12,factor:'Productivity', description:'Reasonable levels of utilisation of resources and assets to accomplish tasks'},
  {position:13,factor:'compliance',description:'Actions,processes and conduct meet all predefined client standards'}

];

