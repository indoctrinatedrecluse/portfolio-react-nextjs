# set verbose
set -x

# install dependencies
npm install

# open the app in Firefox and navigate to http://localhost:3000
python -m webbrowser http://localhost:3000

# run the app
npm run dev

# set verbose off
set +x

# end of script
```