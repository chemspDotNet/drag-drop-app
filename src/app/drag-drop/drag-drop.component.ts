import { Component } from '@angular/core';
import { Inspection } from '../models/inspection.model';
import { Inspector } from '../models/inspector.model';



@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {


  draggedInspection: Inspection | undefined |null;

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


  inspectionList1: Inspection[] = [
    {id :1, inspection_type:" Energy", name:"Boiler inspection"},
    {id :2, inspection_type:" Construction", name:"Building inspection"},
    {id :3, inspection_type:" Energy", name:"AC inspection"},
    {id :4, inspection_type:" transpotaion", name:"Concreate road"},
     ];
  inspectiorList: Inspector[] = [ 
    {id:1, name:'Mary', inspectoions:[]},
    {id:2, name:'John', inspectoions:[]},
    {id:3, name:'Jolly', inspectoions:[]}
  ];

  
  drop( event:any, inspectorIndex:number) {
    debugger
    if(this.draggedInspection){
     this.inspectiorList[inspectorIndex].inspectoions?.push(this.draggedInspection);
     let draggedInspectionIndex = this.findIndex(this.draggedInspection);
      
         this.inspectionList = this.inspectionList?.filter((val, i) => i != draggedInspectionIndex);
    
    }
    
  }


  dragStartInspection(event:any, inspection:Inspection) {
   
    this.draggedInspection = inspection;


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

dragEnd() {
 
  this.draggedInspection = null;
}
 

dragStartDriverSch(event:any, data:any) {
    let item = {
        'trailerNumber': data.trailerNumber,
        'origin': data.origin,
        'destination': data.destination,
    }
    event.dataTransfer.setData("DriverScheduleData", JSON.stringify(item));
}

  onDropDriverSch(event:any, data:any) {
   
}


  onDropToTrailer(event:any) {
   let e = event;
}

  onDragOver(event:any) {
    event.stopPropagation();
    event.preventDefault();
}
  onDragLeave(event :any) {
    event.stopPropagation();
    event.preventDefault();
}

}
