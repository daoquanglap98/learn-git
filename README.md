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
git revert <id> <!-- Đảo ngược những thay đổi của commit trong quá khứ -->