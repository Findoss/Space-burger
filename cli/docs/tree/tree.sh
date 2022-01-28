IGNORE='.git|.gitkeep|.vscode|node_modules|cache|build'
tree -a --dirsfirst -IJ $IGNORE > cli/docs/tree/dist/tree.json;
tree -a --dirsfirst -I  $IGNORE > cli/docs/tree/dist/tree.txt;