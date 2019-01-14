const fs = require('fs')
const excel = require('xlsx');

const create_structure = (data) => {
    for (var key in data) {
        create_folder('../records/' + key);
        for (var rank in data[key]) {
            var work_sheet = excel.utils.json_to_sheet(data[key][rank]);
            var csv_value = excel.utils.sheet_to_csv(work_sheet);
            create_file('../records/' + key + '/Rank - ' + rank + '.csv', csv_value);
        }
    }
}

const create_folder = (dir_path) => {
    if (fs.existsSync(dir_path)) {
        return;
    }
    fs.mkdirSync(dir_path);
}

const create_file = (path, data) => {
    fs.writeFileSync(path, data);
}

module.exports = {
    create_structure: create_structure
}