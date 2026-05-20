const noteTitle = document.querySelector('#noteTitle');
const noteText = document.querySelector('#noteText');
const saveBtn = document.querySelector('#saveBtn');
const notesContainer = document.querySelector('#notesContainer');
const modal = document.querySelector('#modal');
const editTitle = document.querySelector('#editTitle');
const editText = document.querySelector('#editText');
const modalSaveBtn = document.querySelector('#modalSaveBtn');
const modalCancelBtn = document.querySelector('#modalCancelBtn');

let editingId = null;

let notes = [];


function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    const savedNotes = localStorage.getItem('notes');

    if (savedNotes) {
        notes = JSON.parse(savedNotes);
    }

    renderNotes();    
}


function openModal(note) {
    editingId = note.id;
    editTitle.value = note.title;
    editText.value = note.text;
    modal.classList.remove('hidden');
}
function closeModal() {
    editingId = null;
    editTitle.value = '';
    editText.value = '';
    modal.classList.add('hidden');
}


modalCancelBtn.addEventListener('click', closeModal);



function renderNotes() {
    notesContainer.innerHTML = '';

    if (notes.length === 0) {
        notesContainer.innerHTML = '<p class="empty-msg">No notes yet...</p>';
        return;
    }

    notes.forEach((note) => {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');

        noteCard.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) return;
            openModal(note);
        });

        const noteTitleElement = document.createElement('h3');
        noteTitleElement.classList.add('note-title');
        noteTitleElement.textContent = note.title

        const noteTextElement = document.createElement('p')
        noteTextElement.classList.add('note-text')
        noteTextElement.textContent = note.text


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            deleteNote(note.id);
        });

        noteCard.appendChild(noteTitleElement)
        noteCard.appendChild(noteTextElement)
        noteCard.appendChild(deleteBtn);
        notesContainer.appendChild(noteCard)

    });
}

function deleteNote(id) {
    notes = notes.filter((note) => note.id !== id);
    saveNotes(); 
    renderNotes();
}

saveBtn.addEventListener('click', () => {
    const titleValue = noteTitle.value.trim();
    const textValue = noteText.value.trim();

    if (titleValue === '' && textValue === '') return;

    const newNote = {
        id: Date.now(),
        title: titleValue,
        text: textValue
    };
    notes.push(newNote);
    saveNotes();
    renderNotes();
    noteTitle.value = '';
    noteText.value = '';
    console.log(notes);
});

loadNotes();


modalSaveBtn.addEventListener('click', ()=> {
    const note = notes.find(n => n.id === editingId);
    
    if (note) {
        note.title = editTitle.value.trim();
        note.text = editText.value.trim();

        if (note.title === '' && note.text === '') {
            deleteNote(editingId);
        } else {
            saveNotes();
            renderNotes();
        }
        closeModal();
    }
});
