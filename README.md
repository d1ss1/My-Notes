# My Notes ✏️


## [Live Demo] (https://d1ss1.github.io/My-Notes/)


## Features
- Create, edit, and delete notes.
- Edit notes inside a stylish "Liquid Glass" modal window.
- All notes are saved in the browser (`localStorage`), so they stay after reloading the page.
- Clean empty state message when there are no notes.

## Tech Stack
- HTML5
- CSS3 (Flexbox, Grid, backdrop-filter)
- Vanilla JavaScript
- LocalStorage
- JSON

## How It Works And What I Learned
- **Working with Objects:** I stopped saving raw HTML (like I did in the previous project) and learned to store data as an array of `[{id, title, text}]` objects.

- **LocalStorage and JSON:** How to use `JSON.stringify()` and `JSON.parse()` to properly save and load array data.

- **Array Methods:** Using `.filter()` to delete a note and `.find()` to find a note to edit.

- **Logic and State:** Using the `editingId` variable so the app knows exactly which note is currently being edited.

- **CSS Effects:** Using `backdrop-filter: blur()` to create a glass effect.





