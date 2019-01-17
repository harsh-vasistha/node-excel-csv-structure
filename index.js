const excel = require('./handlers/excel-handler')
const fh = require('./handlers/files-handler')

var book = excel.read_excel('../Success.xlsx');
var data = {};
for (var i in book.SheetNames) {
    console.log('Processing Sheet '+book.SheetNames[i]);
    var sheet = excel.read_sheet(i, book);
    excel.sort_data(sheet,data);
}
fh.create_structure(data)
