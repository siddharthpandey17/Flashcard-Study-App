// Recall — Flashcard Study App starter. Complete the TODOs yourself.
let cards = [];
let currentIndex = 0;
let showingAnswer = false;
let reviewedToday = 0;
let editingId = null;

// TODO 1: Select all elements by their IDs.
// TODO 2: Write renderCurrentCard(). Display the current question or answer.
// Update cardPosition (example: 2 / 8); handle an empty deck.
// Disable Previous/Next at the first/last card.
// TODO 3: Write flipCard() and wire it to card click and Show answer.
// Bonus: support Enter and Space keyboard keys.
// TODO 4: Implement Previous and Next. Reset showingAnswer when changing cards.
// TODO 5: Show/hide the add form. On submit validate both fields and create:
// { id: Date.now(), question, answer, reviews: 0, known: false }
// TODO 6: Render deck list with question, review count, Edit and Delete buttons.
// Implement edit and delete actions.
// TODO 7: After revealing an answer, show Need practice / I knew it buttons.
// Update reviews, known status and reviewedToday.
// TODO 8 (bonus): Save/load cards and daily review stats with localStorage.
// TODO 9 (bonus): Add study streak and dark mode.
// Suggested order: selectors → render → flip → navigation → CRUD → stats → storage.
