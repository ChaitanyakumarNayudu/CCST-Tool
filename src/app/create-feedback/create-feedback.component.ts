import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {PageEvent} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {


  clientOrgs =['tek systems','google','Microsoft','MaxTech sol'];
  salesLeads =['john Doe','james philip','Rick c','David m ','Caren','christy'];
  values= [1, 2, 3, 4, 5];
  today = new Date();
  // for form 2
  displayedColumns = ['factor'];
  @Input()checkboxPosition: 'before';



  selection = new SelectionModel<Element>(true, []);
 
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource dedispfaults to lowercase matches
  this.dataSource.filter = filterValue;
}
  public Corg:String;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  showThirdForm:boolean = false;
  
  data = [];

  constructor(private _formBuilder: FormBuilder) { }
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
 
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      clientOrg: ['', Validators.required],
      clientContact: ['', Validators.required],
      sdLead: ['', Validators.required],
      sLead: ['', Validators.required],
      scope: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
  
      sixthCtrl: ['', Validators.required],
      seventhCtrl: ['', Validators.required],
    });

    const some = this.data;
 // determine initial selected options to display
  this.selectedOptions = this.sFactors
    .filter(item => item.selected)
    .map(item => item.factor);   
        }

  add() {
    this.showThirdForm = true;
    if(this.data.length > 0){
      this.data.splice(0, 1);
    }
    this.data.push(this.firstFormGroup.value);
    console.log(this.data);
  }

  sFactors: {
    factor: string;
    description:string;
    selected: boolean;
  }[] =[
    {selected:false, factor:'Business Model Understanding',description:'Deep Experience in the customers need'},
    {selected:false,factor:'Quality Of Deliverables',description:'Deliverables met all acceptance criteria'},
    {selected:false,factor:'Meeting Deadlines',description:'Deliverables are accepted as meeting agreed to dates'},
    {selected:false,factor:'Expense Control',description:'Expenses are clearlu outlined in advance and stay within budget'},
    {selected:false,factor:'communications',description:'Communication flows smoothly,comprehensively and accurately'},
    {selected:false,factor:'Responsiveness',description:'Efficient and timely completion of client requests '},
    {selected:false,factor:'Foresight',description:'Practiv anticipation of client needs'},
    {selected:false,factor:'Knowledge Transfer',description:'effective transferal of information and knowledge'},
    {selected:false,factor:'Behavior',description:'meeting all expectations of standards of reliability,integrity and professionalism'},
    {selected:false,factor:'Team Play',description:'Effective embodiment of team goals-behavior and attitude'},
    {selected:false,factor:'Autonomy',description:'Operational Effectiveness with minimal client interaction and disruption'},
    {selected:false,factor:'Productivity', description:'Reasonable levels of utilisation of resources and assets to accomplish tasks'},
    {selected:false,factor:'compliance',description:'Actions,processes and conduct meet all predefined client standards'}
  ];
  dataSource = new MatTableDataSource(this.sFactors);

  selectedOptions:string[];
  onListControlChanged(list) {
    // determine selected options
    this.selectedOptions = list.selectedOptions.selected.map(item => item.value);
  }
  addFactors() {
    console.log(this.selectedOptions);
  }
}
