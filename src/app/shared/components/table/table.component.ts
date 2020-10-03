import { AfterContentInit, Component, ContentChildren, Input, OnChanges, OnInit, QueryList, SimpleChange, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataTableItem } from '../../../interfaces/metadata-table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges, AfterContentInit {

  @Input() dataSource = [];
  @Input() metaDataTable: MetaDataTableItem[] = [];
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  // Busca dentro del contenido que se haya agregado
  @ContentChildren(MatColumnDef) columnsDef: QueryList<MatColumnDef>;

  listFields = [];

  constructor() {}

  ngOnInit(): void {
    this.listFields = this.metaDataTable.map((item) => item.field);
  }

  ngOnChanges(): void {

  }

  action( row: any): void {
    console.log(row);
  }

  ngAfterContentInit(): void {
    this.columnsDef.forEach( columnDef => this.table.addColumnDef(columnDef));
    if ( this.columnsDef.length ){
      this.listFields.push('actions');
    }
  }
}
