import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { categoryListFormat } from '../data/data';
import { Dialog } from '@angular/cdk/dialog';
import { DeleteCategoryComponent } from './delete-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: '../pages/list.component.html',
  styleUrls: ['../styles/list.component.scss']
})
export class ListCategoryComponent implements OnInit {
  listFormate = categoryListFormat;
  lists:any = [
    
{_id: '64fdeb5e9b04963fbe686a6c', title: 'ok', createdAt: '2023-09-10T16:14:22.009Z', updatedAt: '2023-09-10T16:14:22.009Z', __v: 0},
{_id: '64fdedc176087810e38caa69', title: '123', createdAt: '2023-09-10T16:24:33.062Z', updatedAt: '2023-09-10T16:24:33.062Z', __v: 0},
{_id: '64fdeff876087810e38caa74', title: 'qq', createdAt: '2023-09-10T16:34:00.868Z', updatedAt: '2023-09-10T16:34:00.868Z', __v: 0},
{_id: '64fdf05b76087810e38caa78', title: 'aa', createdAt: '2023-09-10T16:35:39.402Z', updatedAt: '2023-09-10T16:35:39.402Z', __v: 0}
  ];
  constructor(
    private categoryService:CategoryService,
    private dialog: Dialog
  ){  }

  getAll(){
    this.categoryService.all()
      .subscribe((res)=>{
        this.lists = res['categories'];
      }, (e)=>{
        console.log(e)
      });
  }

  onUpdate(id:any){

  }

  onDelete(id:any){
    this.dialog.open(DeleteCategoryComponent, {
      data: {id}
    });
  }

  pushList(){

  }

  ngOnInit(): void {
    this.categoryService.listPush$.subscribe((res)=>{
      this.getAll();
    })
    
  }
  
}
