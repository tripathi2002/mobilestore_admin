import { Component } from '@angular/core';
import { List } from '../class/list';
import { brandListFormat } from '../data/data';
import { Dialog } from '@angular/cdk/dialog';
import { BrandService } from '../services/brand.service';
import { DeleteBrandComponent } from './delete-brand.component';

@Component({
  selector: 'app-brand-list',
  templateUrl: '../pages/list.component.html',
  styleUrls: ['../styles/list.component.scss'],
})
export class ListBrandComponent extends List{

  constructor(
    private bs:BrandService,
    private dialog: Dialog
  ){
    super(brandListFormat);
  }
  
  getAll(){
    this.bs.all()
      .subscribe((res)=>{
        this.lists = res['brands'];
      }, (e)=>{
        console.log(e)
      });
  }
  onUpdate(id:any): void {
    
  }

  onDelete(id:any): void {
    this.dialog.open(DeleteBrandComponent, {
      data: {id}
    });
  }

  ngOnInit(): void {
    this.bs.listPush$.subscribe((res)=>{
      this.getAll();
    })
    
  }
}
