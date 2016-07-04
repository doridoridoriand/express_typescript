var fs = require('fs');
var path = require('path');
var dir = process.argv[2] || '.'; //引数が無いときはカレントディレクトリを対象とする

function walkDir(p, fileCallback, errCallback) {
    fs.readdir(p, function(err, files) {
        if (err) {
            errCallback(err);
            return;
        }

        files.forEach(function(f) {
            var fp = path.join(p, f);
            if(fs.statSync(fp).isDirectory()) {
              // ディレクトリなら再帰
                walkDir(fp, fileCallback);
            } else {
                // ファイルならコールバックで通知
                fileCallback(fp);
            }
        });
    });
};

console.log('【TypeScriptファイルに対応するJavaScriptファイルを削除するツール】');
walkDir(dir, function(path) {
  var extPos = path.lastIndexOf('.ts');

  if (path.length - 3 === extPos) {
    var js = path.slice(0, extPos) + '.js';

    fs.unlink(js, function (err) {
      if (!err)
        console.log(`${js}を削除しました。`);
    });
  }
},
function(err) {
  console.log("Receive err:" + err);
});
