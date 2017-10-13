# Cyresume

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8037c4d301b047e0bbd18f5fddef54b1)](https://www.codacy.com/app/pshah123/resume?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pshah123/resume&amp;utm_campaign=Badge_Grade)

A really cool resume template.

I've decided to open source this.

Inside `console/` you will find several files. The entrypoint, `index.html`, is actually almost entirely blank. `console.js` manages the homepage.
This is a typeout resume modeled after consoles and terminals such as the bash environment.

Inside `console.js`, you can use the add function and add_normal function to append typeable lines.

```javascript
add("This is a typeable line that will be typed word by word."); //prints out like this: > This is a typeable line that will be typed word by word.<br />
add_normal("This is a line that will be typed out all at once."); //prints out like this: This is a line that will be typed out all at once.<br />
```

Right now it is typed automatically, you can uncomment a section of code shown in `console.js` to have the user type it out.

There is also a pacman based and tetris based template, but they are not in use.
