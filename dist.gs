// /**
//  * カスタムスプレッドシートクラス 
//  * @param {データ型} と引数の説明
//  * @return  {データ型} と戻り値の説明
// */
// class CustomSpreadsheet {

//   constructor(id, sheetName) {
//     this.id = id;
//     this.sheetName = sheetName;
//   }

//   getCustomSpreadsheet() {
//     const ss = SpreadsheetApp.openById(this.id);
//     return ss;
//   }

//   getCustomSheet() {
//     const ss = this.getCustomSpreadsheet(); //SSオブジェクト
//     const sheet = ss.getSheetByName(this.sheetName);
//     return sheet;
//   }

//   getCustomValues() {
//     const values = this.getCustomSheet().getDataRange().getValues();
//     return values;
//   }

//   getCustomLastRow() {
//     const lastRow = this.getCustomSheet().getLastRow();
//     return lastRow;
//   }

//   getCustomLastColumn() {
//     const lastColumn = this.getCustomSheet().getLastColumn();
//     return lastColumn;
//   }

//   customAppendRow(record) {
//     this.getCustomSheet().appendRow(record);
//   }

//   getCustomRange(row, column, rowNumber, columnNumber) {
//     const range = this.getCustomSheet().getRange(row, column, rowNumber, columnNumber);
//     return range;
//   }


//   //古い順で並び替え
//   sortRange(row, column, rowNumber, columnNumber) {
//     const range = this.getCustomRange(row, column, rowNumber, columnNumber);


//     // range.sort({column: 1, ascending: true});

//   }

//   // setValues(array){
//   //   this.getSheet().getRange().setValues(array);
//   // }

// }





class CustomSpreadsheet {

  constructor(id, sheetName) {
    this.id = id;
    this.sheetName = sheetName;
  }
  getCustomSpreadsheet() {
    const ss = SpreadsheetApp.openById(this.id);
    return ss;
  }

  getCustomSheet() {
    const ss = this.getCustomSpreadsheet(); //SSオブジェクト
    const sheet = ss.getSheetByName(this.sheetName);
    return sheet;
  }
  getCustomLastRow() {
    const lastRow = this.getCustomSheet().getLastRow();
    return lastRow;
  }

  getCustomLastColumn() {
    const lastColumn = this.getCustomSheet().getLastColumn();
    return lastColumn;
  }
  customAppendRow(record) {
    this.getCustomSheet().appendRow(record);
  }

}


class AnotherCustomSpreadsheet extends CustomSpreadsheet {
  // constructor(id,sheetName,row,column){
  //   super(id,sheetName);
  //   this.row = row;
  //   this.column = column;
  // }
  // getCustomSpreadsheet() {
  // const ss = SpreadsheetApp.openById(this.id);
  // return ss;
  // }

  // getCustomSheet() {
  //   const ss = this.getCustomSpreadsheet(); //SSオブジェクト
  //   const sheet = ss.getSheetByName(this.sheetName);
  //   return sheet;
  // }

  // getCustomRange(rowNumber, columnNumber) {
  // const range = this.getCustomSheet().getRange(this.row, this.column, rowNumber, columnNumber);
  // return range;
  // }

}

function test() {
const id = "11C6s8C4Ux7h242KjYhYBi6OsM-9FUu1xt2_ViZcvqTU";
const sheetName = "freight cost";
// const s_another = new AnotherCustomSpreadsheet(id, sheetName,3,1);
// const data = s_another.getCustomRange(15,10);
// console.log(data)
const s_another = new AnotherCustomSpreadsheet(id, sheetName);
console.log(s_another.getCustomSpreadsheet())
}