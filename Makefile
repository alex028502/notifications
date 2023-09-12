

web/favicon.ico:	
	convert -size 16x16 xc:#0000FF $@
vapid-keys.json:
	node_modules/.bin/web-push generate-vapid-keys --json > vapid-keys.json
