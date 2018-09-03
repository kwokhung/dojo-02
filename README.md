npm install -g @dojo/cli
npm install -g @dojo/cli-create-app
npm install -g @dojo/cli-create-widget
npm install -g @dojo/cli-build-widget

dojo create app --name dojo-02
dojo create widget --name Dummy --component

dojo build --mode dist
dojo build --mode dev
dojo build --mode dev --watch memory --serve
dojo test
dojo test -c local
dojo build --mode test
dojo test -f
dojo build widget --mode dev

1. Init Repo (VSCode)

2. Commit Repo (VSCode)

3. Create Repo (GitHub REST API)
-> curl -u 'kwokhung' https://api.github.com/user/repos -d '{"name":"dojo-02"}'

4. Remote Add Origin
-> git remote add origin https://github.com/kwokhung/dojo-02

5. Push Origin Master
-> git push -u origin master
