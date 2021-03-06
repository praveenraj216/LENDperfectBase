import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeytextService {

  static labelDeta = {
    "themeInfo": {
      "heading": "Themes",
      "label": [
        "Primary",
        "Secondary",
        "Accent",
        "Text"
      ],
      "btnText": 'Apply Theme'
    },
    "logoInfo": {
      "heading": "Logo"
    },
    "langInfo": {
      "heading": "Language",
      "btnText": 'Apply Language'
    },
    "settingInfo": {
      "heading": "Setting"
    }
  }


}