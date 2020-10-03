import { Component, OnInit } from '@angular/core';
import { MedicDto } from 'src/app/dtos/medic.dto';
import { MetaDataTableItem } from '../../../interfaces/metadata-table.interface';
import { MedicService } from '../../../services/medic.service';
import { mappingMedic } from '../../../dtos/medic.dto';
import { FormMedicComponent } from '../../components/form-medic/form-medic.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-list-medic',
  templateUrl: './list-medic.component.html',
  styleUrls: ['./list-medic.component.css']
})
export class ListMedicComponent implements OnInit {
  dataSource: MedicDto[] = [
    { name: 'Ejemplo 01', lastname: 'Ejemplo 01' }
  ];

  metaDataListMedics: MetaDataTableItem[] = [
    {
      field: 'name',
      title: 'Nombre',
    },
    { field: 'lastname', title: 'Apellido' },
  ];

  constructor(
    private readonly medicService: MedicService,
    private readonly dialog: MatDialog ) {}

  ngOnInit(): void {
    this.medicService.getAll().subscribe(
      (response) => {
        this.dataSource = mappingMedic(response) as MedicDto[];
      },
      (error) => console.log(error)
    );
  }

  action(actionButton: string): void {
    switch (actionButton) {
      case 'EDITAR':
        this.dialog.open(FormMedicComponent, {
          panelClass: 'modal',
          disableClose: true,
        });
        break;
      case 'ELIMINAR':
        break;
    }
  }
}
