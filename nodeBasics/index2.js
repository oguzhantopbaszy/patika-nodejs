const fs = require('fs');

//READ FILE

/* fs.readFile('password.txt', 'utf-8', (err, data) => {
    if(err) console.log(err);
    console.log(data);
    console.log('Dosya okundu.')
}) */

//WRITE FILE

/* fs.writeFile('example.json', '{"name": "Oğuzhan", "age": 26}','utf-8', (err) => {
    if(err) console.log(err);
    console.log('JSON dosya başarılı bir şekilde oluşturuldu.')
}); */

//ADD DATA FILE

/* fs.appendFile('example.txt', '\nKODLAMIYORUZ BU SEFER BAHAHAHA(boşluksuz)','utf-8', (err) => {
    if(err) console.log(err);
    console.log('Yeni veri eklendi')
}); */

//DELETE FILE

/* fs.unlink('example.json', (err) => {
    if (err) console.log(err);
    console.log('DOSYA SILINDI');
}) */

//CREATE FOLDER

/* fs.mkdir('uploads/img', { recursive: true }, (err) => {
    if(err) console.log(err);
    console.log('KLASORLER OLUSTURULDU');
}) */

//DELETE FOLDERS

/* fs.rmdir('uploads', { recursive: true }, (err) => {
    if(err) console.log(err);
    console.log('KLASORLER SILINDI');
}) //In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead */