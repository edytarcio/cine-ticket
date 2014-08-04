# Most Useful Git Comands
http://tmorcinek.wordpress.com/most-useful-git-commands/
 (use "git add/rm <file>..." to update what will be committed)

http://www.siteground.com/tutorials/git/commands.htm

Merging via command line

If you do not want to use the merge button or an automatic merge cannot be performed, you can perform a manual merge on the command line.
HTTP Git Patch

Step 1: From your project repository, bring in the changes and test.

git fetch origin
git checkout -b docs origin/docs
git merge master

Step 2: Merge the changes and update on GitHub.

git checkout master
git merge --no-ff docs
git push origin master


## 


You have two options:

The first is a merge, but this creates an extra commit for the merge.

Checkout each branch:

git checkout b1

Then merge:

git merge origin/master

Then push:

git push origin master

Alternatively, you can do a rebase:

git rebase master


# Deleting a remote branch
sudo git push origin --delete readme_file
