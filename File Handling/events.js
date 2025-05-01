// events.js
const EventEmitter = require("events");
const noteEvents = new EventEmitter();

// Listen for 'note-added'
noteEvents.on("note-added", (note) => {
  console.log(`[EVENT] Note added with ID ${note.id}`);
});

// Listen for 'note-deleted'
noteEvents.on("note-deleted", (id) => {
  console.log(`[EVENT] Note with ID ${id} deleted`);
});

module.exports = noteEvents;
