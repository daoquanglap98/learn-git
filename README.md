This project is just a demo
git init
git add namefile
git status
git commit -m "message"
git log
git show id
git reset
git restore
git diff
git checkout -b <branch>
git checkout <branch>
git merge <branch>
git branch -D <branch>
git reset --soft <id> <!-- Đưa về staging area -->
git reset --mixed <id> <!-- Đưa về working directory --> 
git reset --hard <id> <!-- Xóa commit và đưa về commit có id truyền vào --> 
git revert <id> <!-- Đảo ngược những thay đổi của commit -->
git remote add origin <link>
git push -u origin master <!-- Lần đầu push -->
git config --global credential.helper "cache --timeout=18000" <!-- Save password github -->
git clone <link>
git pull <!-- Kéo code về -->