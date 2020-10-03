import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, HeaderComponent, MenuComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
