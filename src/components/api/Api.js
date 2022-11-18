function apiLogin(username, password) {
  return 1;
}

function apiGetUserData(username, password) {
  return {"email": "user_email", "fullname": "user_fullname", "date_of_birth": "user_date_of_birth"};
}

function apiGetUserFiles(username, password) {
  return [
    {"id": "1", "filename": "asd", "is_deleted": false},
    {"id": "2", "filename": "vcb", "is_deleted": true},
    {"id": "3", "filename": "zerg", "is_deleted": false},
  ];
}

function apiUploadFile(username, fileName, originalName, fileText) {
  alert("Uploading file " + originalName + " (known as " + fileName + ") for user " + username + " with data:\n" + fileText);
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
    {"id": "1", "filename": "aaa"+fileName, "author": author},
    {"id": "2", "filename": fileName, "author": "bbb"+author}
  ];
}

module.exports = { apiLogin, apiGetUserData, apiGetUserFiles, apiUploadFile, apiRegister, apiDownloadFile, apiDeleteFile, apiSearch };
