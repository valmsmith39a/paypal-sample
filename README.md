# PayPal Sample

### To run:
##### (1) webpack --watch
##### (2) npm start (open another window in terminal in same directory)
##### (3) URL: http://localhost:3000/

### Notes:
- End result when enter 'quotationStart' and click on `Get Locales` should look like this: http://prntscr.com/ffz9sc (I've encountered a slight lag of about 20 seconds or so before results display).

- Used cldr package: https://www.npmjs.com/package/cldr and `extractDelimiters` function (https://www.npmjs.com/package/cldr#cldrextractdelimiterslocaleidroot) which gets the delimiters object for a specified locale.

- I then ran that function through a loop of all the locale ids to get the delimiters objects and then filtered against user's property input (e.g. quotationStart or quotationEnd) to get the desired list of delimiters data.

- Problem with this approach is that I'm not able to provide the name of each locale in the final list - I've simply numbered them instead.
