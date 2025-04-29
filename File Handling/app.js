const fs = require("fs");
const command = process.argv[2];
const input = process.argv[3];
const NOTES_FILE = "notes.json";

function readNotes() {
  if (!fs.existsSync(NOTES_FILE)) return [];
  const data = fs.readFileSync(NOTES_FILE, "utf8");
  return data ? JSON.parse(data) : [];
}

function writeNotes(notes) {
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
}

// Add a note (with timestamp)
if (command === "add") {
  if (!input) {
    console.log("Please provide note content.");
    return;
  }

  const notes = readNotes();
  const newNote = {
    id: notes.length ? notes[notes.length - 1].id + 1 : 1,
    content: input,
    timestamp: new Date().toISOString(),
  };

  notes.push(newNote);
  writeNotes(notes);
  console.log("Note added:", newNote);

  // List notes
} else if (command === "list") {
  const notes = readNotes();
  if (notes.length === 0) {
    console.log("No notes found.");
  } else {
    console.log("\nYour Notes:");
    notes.forEach((note) => {
      console.log(`[${note.id}] ${note.content}`);
      console.log(`   🕒 ${note.timestamp}\n`);
    });
  }

  // Clear all notes
} else if (command === "clear") {
  writeNotes([]);
  console.log("All notes cleared.");

  // Delete note by ID
} else if (command === "delete") {
  const idToDelete = parseInt(input);
  if (isNaN(idToDelete)) {
    console.log("Please provide a valid numeric ID.");
    return;
  }

  const notes = readNotes();
  const filteredNotes = notes.filter((note) => note.id !== idToDelete);

  if (filteredNotes.length === notes.length) {
    console.log(`Note with ID ${idToDelete} not found.`);
  } else {
    writeNotes(filteredNotes);
    console.log(`Note with ID ${idToDelete} deleted.`);
  }

  // Unknown command
} else {
  console.log("Usage:");
  console.log('  node app.js add "your note here"');
  console.log("  node app.js list");
  console.log("  node app.js delete <id>");
  console.log("  node app.js clear");
}
