echo off
set projectName=%1
set projectUrl=https://github.com/Groovejets2/%projectName%.git

echo "# %projectName% - Please update the read me details here " >> README.md

git init

git add *

git rm git_repo_init.cmd

git commit -m "First commit"

git remote add origin %projectUrl%

git status

git push -u origin master