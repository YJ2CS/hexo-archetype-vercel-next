require('shelljs/global');

try {

    hexo.on('deployAfter', function() {//当deploy完成后执行备份

        run();

    });

} catch (e) {

    console.log("产生了一个错误啊<(￣3￣)> !，错误详情为：" + e.toString());

}

function run() {

    if (!which('git')) {

        echo('Sorry, this script requires git');

        exit(1);

    } else {

        echo("======================Auto Backup Begin===========================");

        //使用idea，此行命令注释掉
        //cd('E:/work/CS-BlogSource');    //此处修改为Hexo根目录路径

        if (exec('git add --all').code !== 0) {

            echo('Error: Git add failed');

            exit(1);

        }

        if (exec('git commit -am "blog auto backup script\'s commit"').code !== 0) {

            echo('Error: Git commit failed');

            exit(1);

        }

        if (exec('git push origin main').code !== 0) {
        //提交本地main分支作为远程的main分支
            // git push origin main
        // 提交本地dev分支作为远程的master分  好像只写这一句，远程的github就会自动创建一个dev分支
        // 注意，这个操作十分危险，它会完全覆盖远程的master分支，其他提交者所作的更改会丢失
            // git push origin dev:master

            echo('Error: Git push origin main failed');

            exit(1);

        }

        echo("==================Auto Backup Complete============================")

    }

}