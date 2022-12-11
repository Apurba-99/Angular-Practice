import { Component } from '@angular/core';
import * as fileSaver from 'file-saver';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import { Employee } from '../employee';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {
  file:File | any;
  arrayBuffer:any;
  filelist:any;
  employees1:Employee[] | undefined;
  //private uploadURL="http://localhost:8070/api/v1/upload-file";
 
  constructor(
    private employeeService:EmployeeService) { }
  onSelectFile(event:any)
  {
    this.file=event.target.files[0];
    console.log("selected");
  
  }
  uploadFile(){
  this.employeeService.upload(this.file);
  }
  // uploadFile():Observable<any>{
  //   const formdata=new FormData();
  //   formdata.append("file",this.file,this.file.name);
  //   console.log("loaded");
  //   return this.httpClient.post(this.uploadURL,formdata);
  
  // }
}
  // onSelectFile(event:any)     
  // {    
  // this.file= event.target.files[0];     
  // let fileReader = new FileReader();    
  // fileReader.readAsArrayBuffer(this.file);     
  // fileReader.onload = (e) => {    
  //     this.arrayBuffer = fileReader.result;    
  //     var data = new Uint8Array(this.arrayBuffer);    
  //     var arr = new Array();    
  //     for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
  //     var bstr = arr.join("");    
  //     var workbook = XLSX.read(bstr, {type:"binary"});    
  //     var first_sheet_name = workbook.SheetNames[0];    
  //     var worksheet = workbook.Sheets[first_sheet_name];    
  //     //console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));    
  //     this.filelist =XLSX.utils.sheet_to_json(worksheet,{raw:true});     
        
  //           console.log(this.filelist)  
  //           this.employees1=this.filelist  
    
  // }    
    


  // }
//   public saveAsExcelFile1(file: any, fileName: string): void {
//     const data: Blob = new Blob([file], {type: EXCEL_TYPE});
//    //  fileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
//    fileSaver.saveAs(data,'employee')
//  }






