const path = require('path');
const fs = require('fs');

const fsPromises = fs.promises;

function removePromise(dir) {
  return new Promise(function (resolve, reject) {
    //先读文件夹
    fs.stat(dir,function (err, stat) {
      if(stat.isDirectory()){
        fs.readdir(dir,function (err, files) {
          files = files.map(file=>path.join(dir,file)); // a/b  a/m
          files = files.map(file=>removePromise(file)); //这时候变成了promise
          Promise.all(files).then(function () {
            fs.rmdir(dir,resolve);
          })
        })
      }else {
        fs.unlink(dir,resolve)
      }
    })
  })
}

const removeDir = async (dir) => {
  const stat = await fsPromises.stat(dir);
  if (stat.isDirectory()) {
    let files = await fsPromises.readdir(dir);
    files = files.map(file => path.join(dir, file));
    const fileLen = files.length;
    for (let i = 0; i < fileLen; i++) {
      await removeDir(files[i]);
    }
    return fsPromises.rmdir(dir);
  } else {
    return fsPromises.unlink(dir);
  }
}

const dirPath = __dirname + '/fs12/apk';

removeDir(dirPath)
.then(() => {
  console.log('操作成功');
})
.catch((err) => {
  console.log('操作失败', err);
});