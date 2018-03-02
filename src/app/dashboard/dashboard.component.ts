import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator, MatSort } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // constructor() { }

  // ngOnInit() {
  // }
  displayedColumns = ['select','position', 'name', 'cname'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
   
  }
public first = true;
public second = false;
  // click event
  onclick1() {
this.first = !this.first;
}
onclick2() {
  this.second = !this.second;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;

   
  }
  selectRow(row) {
    console.log(row);
  }
  constructor() { }

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
}

export interface Element {
  name: string;
  position: number;
  cname: string;
  symbol: string;
}
const ELEMENT_DATA: Element[] = [
  {position: 20034, name: 'Internet Shopping Cart System', cname: 'Maxo', symbol: 'He'},
  {position: 1041, name: 'Software specification and design methodologies', cname: 'tech Systems', symbol: 'H'},
  {position: 3056, name: 'Consumer-oriented digital economics',  cname: 'Tachyon technologies', symbol: 'Li'},
  {position: 4001, name: 'Human factors in computer systems', cname: 'google', symbol: 'Be'},
  {position: 5945, name: 'Personal information management',  cname: 'IBM', symbol: 'B'},
  {position: 4034, name: 'Government services in the context of digital society', cname: 'Accenture', symbol: 'Be'},
  {position: 4567, name: 'Geographic and spatial data infrastructures', cname: 'DataMetrix', symbol: 'Be'},
  {position: 4895, name: 'Business process integration and management', cname: 'Accenture', symbol: 'Be'},
  {position: 5007, name: 'Peer-to-Peer Systems and applications', cname: 'Maxo', symbol: 'Be'},
  {position: 5007, name: 'Security in network, systems, and applications', cname: 'TCS infosystems', symbol: 'Be'},
  {position: 2005, name: 'Data-centered information systems', cname: 'Maxo', symbol: 'M'},
  {position: 1006, name: 'Digital analysis and processinC', cname: 'IDC technologies', symbol: 'H'},
  {position: 3789, name: 'A Visualization and Analysis Tool for NS-2 Wireless Simulations: iNSpect',  cname: 'facebook', symbol: 'Li'},
  {position: 1443, name: 'Intranet Based Email System', cname: 'Amazon', symbol: 'Be'},
  {position: 2556, name: 'Soundbox: A Graphical Interface to Digital',  cname: 'WALMART', symbol: 'B'},
  {position: 4564, name: 'Graphical Search Engine', cname: 'Tachyon technologies', symbol: 'Be'},
  {position: 4943, name: 'Webcam Image Tracker', cname: 'Maxo', symbol: 'Be'},
  {position: 2467, name: 'Circular Target Detection and Pattern Detection', cname: 'Maxo', symbol: 'Be'},
  {position: 1434, name: 'Compression in Flash-based Databases', cname: 'Maxo', symbol: 'Be'},
  {position: 6212, name: 'Short Term Load Forecasting', cname: 'Maxo', symbol: 'He'},
  {position: 1346, name: 'Secure Routers', cname: 'Maxo', symbol: 'H'},
  {position: 3232, name: 'Image Classification Using Neural Networks and Fuzzy Logic',  cname: 'Maxo', symbol: 'Li'},
  {position: 4123, name: 'QOS Architecture for Mobile Nodes', cname: 'Maxo', symbol: 'Be'},
  {position: 5980, name: '3D View Morphing',  cname: 'Maxo', symbol: 'B'},
  {position: 4135, name: 'Telemedicine software and devices', cname: 'Maxo', symbol: 'Be'},
  {position: 1534, name: 'Mobile TV and IPTV', cname: 'Maxo', symbol: 'Be'},
  {position: 1214, name: 'System advanced paradigms', cname: 'Maxo', symbol: 'Be'},
  {position: 4123, name: 'Digital analysis and processing', cname: 'Maxo', symbol: 'Be'},
  
];


