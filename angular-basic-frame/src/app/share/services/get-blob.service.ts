import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';


@Injectable()
export class GetBlobService {

  constructor(
    public http: HttpClient
  ) { }

  getBlobData() {
    const url = "http://localhost:3000/excel/Membership Benefits.xlsx";
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.get(url, {headers, responseType: 'blob'}).toPromise();
  }

  showFile(blob: Blob, fileName: string, fileExtension?: string) {

    if(fileName.indexOf('.') === -1 && fileExtension) {
      fileName += `.${fileExtension}`;
    }

    if(window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, fileName);
      return;
    }

    const data = window.URL.createObjectURL(blob);

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && fileExtension == 'xlsx') {
      const reader = new FileReader();
      reader.readAsBinaryString(blob);
      reader.onload = (e) => {
        const type = 'application/msexcel';
        const bdata = btoa(reader.result);
        const dataUri = `data:${type};base64,${bdata}`;

        window.open(dataUri, '_blank');
      }
      return;
    }

    const link = document.createElement('a');
    link.href = data;
    link.download = fileName;
    link.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(data);
    }, 100)

  }

}
