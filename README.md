# Image Buffer -> Base64

This program returns a Base64 encoding of an image buffer (from either the web or local file) as STDOUT (a standard output), meaning that you can run the file and use whatever it logs/outputs.

## Help Menu
- `-h <url>`                    sends a http get request to the url and returns Base64 encoding of the image
- `--http <url>`                same as above
- `-r <path/to/file>`           fs module reads file and returns Base64 encoding of the image
- `--readFile <path/to/file>`   same as above

## How To Build

Install all of the modules...
```sh
$ npm install
```
  
Compile the TypeScript source code into Commonjs, create executables and store them locally...
```sh
$ npm run build
```

## Why not use the Base64 Linux command?
Because... why not? 😈

(Pull Requests are also accepted | also needing help on how to add commands in NT & OSX)