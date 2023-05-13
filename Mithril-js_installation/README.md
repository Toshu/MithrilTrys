1. Initialize the directory as an npm package
```
npm init -y
```
2. install required tools
```
    $ npm install mithril --save
    $ npm install vite --save-dev
```
3.  create a "start" entry to the scripts section in package.json.
```
    {
        "...": "...",
        "scripts": {
            "start": "vite",
            "build": "vite build",
            "serve": "vite preview"
        }
    }
```
4. create vite.config.js
```
    export default {
        root: "src",
        server: {
            port: 8080,
        },
        build: {
            outDir: "../build",
        },
    };
```
5. create src/index.js file.
```
    import m from "mithril";

    m.render(document.body, "hello world");
```
6. create src/index.html
```
    <!DOCTYPE html>
    <html lang="de">
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <title>Mithril App</title>
        </head>
        <body>
            <script type=module" src="/index.js"></script>
        </body>
    </html>
```
7. run vite
```
    $ npm start
```
8. open localhost:8080/ in a browser
