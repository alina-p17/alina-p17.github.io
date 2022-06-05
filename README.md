# Build
- npm install
- npm run build

# Deploy
- git add dist -f 
- git commit -m "Deploying to GitHub Pages"
- git push origin \`git subtree split --prefix dist main\`:gh-pages --force 
- git reset --hard origin/main
