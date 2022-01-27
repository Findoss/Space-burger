cd ../..;
tree -a -IJ '_|.git|.gitkeep|node_modules|cache|test_*' > docs/tree.json;
tree -a -I '_|.git|.gitkeep|node_modules|cache|test_*' > docs/tree.txt;