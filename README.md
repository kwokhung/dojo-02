dojo create app --name dojo-01
dojo build --mode dist
dojo build --mode dev
dojo build --mode dev --watch memory --serve
dojo test
dojo test -c local
dojo build --mode test
dojo test -f

1. Init Repo (VSCode)

2. Create Repo (GitHub REST API)
-> curl -u 'kwokhung' https://api.github.com/user/repos -d '{"name":"dojo-01"}'

3. Remote Add Origin
-> git remote add origin https://github.com/kwokhung/dojo-01

4. Push Origin Master
-> git push -u origin master
