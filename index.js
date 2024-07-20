const titleInput = document.getElementById('titleInput');
const noteInput = document.getElementById('noteInput');
const saveButton = document.getElementById('addButton');
const notesContainer = document.getElementById('notesContainer');

let notes = [];

function renderNotes() {

    notesContainer.innerHTML = '';


    for (let i = 0; i < notes.length; i++) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.textContent = notes[i];
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteNote(i);
        }
        noteDiv.appendChild(deleteButton);
        notesContainer.appendChild(noteDiv);
    });

}

addButton.addEventListener('click', function () {
    const noteText = noteInput.value;

    notes.push(noteText);

    noteInput.value = '';

    renderNotes();
});

function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}

// const noteTaking = document.getElementById('noteTaking');
// noteTaking.style.display = "flex";
// noteTaking.style.flexDirection = "column";
// noteTaking.style.justifyContent = "center";
// noteTaking.style.alignItems = "center";
