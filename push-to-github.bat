@echo off
echo This script will push the repository to your GitHub
echo.
echo First, make sure you've created a new repository on GitHub at: https://github.com/new
echo.
set /p username="Enter your GitHub username: "
set /p reponame="Enter your repository name: "
echo.
echo Adding remote origin...
git remote add origin https://github.com/%username%/%reponame%.git
echo.
echo Setting main branch...
git branch -M main
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo Done! Your repository should now be available at:
echo https://github.com/%username%/%reponame%
pause