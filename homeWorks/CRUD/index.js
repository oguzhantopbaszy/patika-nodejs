const fs = require('fs')

//Dosya yazdırma
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary":2000}', 'utf-8', (err) => {
    if(err) console.log(err);
    console.log('JSON dosyası başarılı bir şekiğlde yazdırıldı.')
})

//Dosya okuma
fs.readFile('employees.json', 'utf-8', (err, data) => {
    if(err) console.log(err);
    console.log(data);
    console.log('Dosya başarılı bir şekilde okundu.')
})

//Veri güncelleme
fs.appendFile('employees.json', ',\n{"name":"Employees 2 Name", "salary":5000}', 'utf-8', (err) => {
    if(err) console.log(err);
    console.log('Yeni veri başarılı bir şekilde eklendi.')
})

//Dosya silme
fs.unlink('employees.json', (err) => {
    if(err) console.log(err);
    console.log('Dosya silindi.')
})