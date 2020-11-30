import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { MatTableComponent } from './components/pst-mat-table/pst-mat-table.component';

@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDialogModule,
        FormsModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTableComponent,
        FormsModule
    ],
    declarations: [MatTableComponent],
    providers: [],
})
export class SharedModule { }
