function apiLogin(username, password) {
  return 1;
}

function apiGetUserData(username, password) {
  return {"email": "api_user_email", "fullname": "api_user_fullname", "date_of_birth": "api_user_date_of_birth"};
}

function apiGetUserFiles(username, password) {
  return [
    {"id": "1", "filename": "первый файл", "is_deleted": false},
    {"id": "2", "filename": "второй файл", "is_deleted": true},
    {"id": "3", "filename": "третий файл", "is_deleted": false},
  ];
}

function apiUploadFile(username, fileName, originalName, fileText) {
  alert("Загружаем файл " + originalName + " (также известен как " + fileName + ") для юзера " + username + " с текстом:\n" + fileText);
}

function apiRegister(username, password, fullname, email, date_of_birth) {
  return 1;
}

function apiDownloadFile(fileId) {
  let fileContent = "contentfromsite" + fileId;
  let fileName = "filename.fromsite";
  let fileExtension = ".txt";

  const file = new File([fileContent], fileName + fileExtension, {
    type: 'text/plain',
  })
  const link = document.createElement('a');
  const url = URL.createObjectURL(file);
  link.href = url;
  link.download = file.name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

function apiDeleteFile(fileId) {
  alert("Deleting file with id " + fileId);
}

function apiSearch(fileName, author, dateFrom, dateTo) {
  return [
    {"id": "1", "filename": "просто_приставка_вначале_" + fileName, "author": author},
    {"id": "2", "filename": fileName, "author": "просто_приставка_вначале_" + author}
  ];
}

module.exports = { apiLogin, apiGetUserData, apiGetUserFiles, apiUploadFile, apiRegister, apiDownloadFile, apiDeleteFile, apiSearch };
