import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'benniao-multi-language',
  templateUrl: './multi-language.component.html',
  styleUrls: ['./multi-language.component.scss']
})
export class MultiLanguageComponent implements OnInit {

  languageList: any[] = [
    {name: '简体中文', fileName: 'ch'},
    {name: 'English', fileName: 'en'},
  ]

  constructor(
    private translate: TranslateService
  ) { 
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngOnInit() {
    
  }

  changeLanguage(file) {
    this.translate.use(file);
  }

}
