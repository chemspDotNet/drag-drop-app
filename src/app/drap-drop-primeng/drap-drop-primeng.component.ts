import { Component } from '@angular/core';
import { Inspection } from '../models/inspection.model';
import { Inspector } from '../models/inspector.model';

@Component({
  selector: 'app-drap-drop-primeng',
  templateUrl: './drap-drop-primeng.component.html',
  styleUrls: ['./drap-drop-primeng.component.css']
})
export class DrapDropPrimengComponent {
  inspectionList: Inspection[] = [
    {id :1, inspection_type:" Energy", name:"Boiler inspection"},
    {id :2, inspection_type:" Construction", name:"Building inspection"},
    {id :3, inspection_type:" Energy", name:"AC inspection"},
    {id :4, inspection_type:" transpotaion", name:"Concreate road"},
    {id :5, inspection_type:" Energy", name: "Oven inspection"},
    {id :6, inspection_type:" transpotaion", name:"Railroad"},
    {id :8, inspection_type:" auto", name:"Car inspection"},
    {id :7, inspection_type:" Energy", name:"Heater inspection"}
  ];


  inspectiorList: Inspector[] = [ 
    {id:1, name:'Mary', inspectoions:[]},
    {id:2, name:'John', inspectoions:[]},
    {id:3, name:'Jolly', inspectoions:[]}
  ];

  draggedInspection: Inspection | undefined |null;

  
  ngOnInit(): void {   }




  dragStart(inspection: Inspection) {
    this.draggedInspection = inspection;
  console.log(this.draggedInspection);
}


drop(inspectorIndex:number) {
  if(this.draggedInspection){
   this.inspectiorList[inspectorIndex].inspectoions?.push(this.draggedInspection);
   let draggedInspectionIndex = this.findIndex(this.draggedInspection);
    
       this.inspectionList = this.inspectionList?.filter((val, i) => i != draggedInspectionIndex);
  
  }
  
}


dragEnd() {
 
  this.draggedInspection = null;
}

findIndex(product: Inspection) {
  let index = -1;
  for (let i = 0; i < (this.inspectionList as Inspection[]).length; i++) {
      if (product.id === (this.inspectionList as Inspection[])[i].id) {
          index = i;
          break;
      }
  }
  return index;
}

}
