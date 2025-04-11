# Translation Owl (Node.js CLI)

A simple command-line translation program using Node.js.

## setup
1. install the dependencys `npm install`
2. to run the program `node ./main.js` or `npm start`

> You can also create a `shell` script and place it in the `bin` directory or any directory included in your `PATH`.

## Usage

### Default Behavior
If you run the program without any flags, it uses the following default values:
- **Source Language**: `en`
- **Target Language**: `ar`
- **Text**: `hello world`

### Using Flags
You can pass command-line flags to translate a single text immediately. If no flags are used, the program enters interactive mode where you can translate multiple texts in different languages.

#### Available Flags:
- `-lang <string>`: Source language (e.g., `en`, `fr`, `es`)
- `-target <string>`: Target language (e.g., `ar`, `de`, `zh`)
- `-text <string>`: The text you want to translate

### Interactive Console Mode
If no flags are provided, the program starts an interactive loop where you’ll be prompted for the following each time:
```
    lang:
    target:
    text:
```
It will then translate the provided text accordingly.

To exit the console, type `.exit` at any prompt.

### Error Handling
If any errors occur during translation, they will be logged to the console.

---

