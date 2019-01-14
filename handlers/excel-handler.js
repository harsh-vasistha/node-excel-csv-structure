const excel = require('xlsx');

const read_workbook = (path) => {
    return excel.readFile(path);
}

const read_stage_excel = (index, workbook) => {
    return excel.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[index]]);
}

const sorted_data = (sheet_data) => {
    var data = {};
    for (var i in sheet_data) {
        if (!data.hasOwnProperty(sheet_data[i].Object_Name__c)) {
            data[sheet_data[i].Object_Name__c] = {};
        }
        if (!data[sheet_data[i].Object_Name__c].hasOwnProperty(sheet_data[i].Rank)) {
            data[sheet_data[i].Object_Name__c][sheet_data[i].Rank] = [];
        }
        data[sheet_data[i].Object_Name__c][sheet_data[i].Rank].push(sheet_data[i]);
    }
    return data;
}

module.exports = {
    read_excel : read_workbook,
    read_sheet : read_stage_excel,
    sort_data : sorted_data
}