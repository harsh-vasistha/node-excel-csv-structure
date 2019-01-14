const excel = require('./handlers/excel-handler')
const fh = require('./handlers/files-handler')

var book = excel.read_excel('../Data.xlsx');
var sheet = excel.read_sheet(0,book);
fh.create_structure(excel.sort_data(sheet))
