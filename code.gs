//functionNameにtest()が使えるのはここだけだ！

function test01() {
}


function testCustomSpreadsheet() {

  const id = "11C6s8C4Ux7h242KjYhYBi6OsM-9FUu1xt2_ViZcvqTU";
  const sheetName = "freight cost";
  const s = new CustomSpreadsheet(id, sheetName);

  // const lastRow = s.getCustomLastRow();
  // const lastColumn = s.getCustomLastColumn();
  // const [row, column, rowNumber, columnNumber] = [3, 1, lastRow - 2, lastColumn];

  // const range = s.getCustomRange(row, column, rowNumber, columnNumber);




  const lastRow = s.getCustomLastRow();
  const lastColumn = s.getCustomLastColumn();
  const [row, column, rowNumber, columnNumber] = [3, 1, lastRow - 2, lastColumn];

  const range = s.sortRange(row, column, rowNumber, columnNumber);





  // console.log(range.getA1Notation());

}
