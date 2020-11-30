import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

// Angular Material
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// Config
import { IPstTableConfig } from '../../interfaces/pst-table-config.interface';

@Component({
    selector: 'pst-mat-table',
    templateUrl: './pst-mat-table.component.html',
    styleUrls: ['./pst-mat-table.component.scss']
})
export class MatTableComponent implements AfterViewInit{

    @Input() displayedColumns: string[];
    @Input() config: IPstTableConfig;

    @Input() set data(gridData) {
        if (!gridData) {
            return;
        }

        // Assign the data to the data source for the table to render
        this.dataSource.data = [...gridData];
        this.count = gridData.length;
    }

    @Output() itemClicked = new EventEmitter<any>();

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    public count: number;
    public dataSource = new MatTableDataSource();

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }
}
