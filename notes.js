const dailyNotes = [
    {
        id: 1,
        subject: "GitHub Basics",
        date: "July 9th",
        feeling: "Excited, anticipating what is to come",
        timeSpent: 6
    },
    {
        id: 2,
        subject: "GitHub Workflow (team",
        date: "July 13th to July 15th",
        feeling: "A little overwhelmed with new information. Much better the next day after my brain processed.",
        timeSpent: 15
    }
]

const noteJuly16 = {
    id: 3,
    subject: "Javascript Arrays, Objects, Arrays of objects and Array methods",
    date: "July 16th",
    feeling: "challenged",
    timeSpent: 6,
}

dailyNotes.push(noteJuly16);

// create function that pushes a new note into the array, and also attributes it an id
const createNote = (note) => {
    // find last index (lenght of the array minus one = index, because index starts at 0)
    const lastIndex = dailyNotes.length - 1
    // find current last note (what index is the last note at, so we can later find the id)
    const currentNote = dailyNotes[lastIndex]
    // determine id of currentNote (which is the maxId, because it's the last one in the array)
    const maxId = currentNote.id
    note.id = maxId + 1

    dailyNotes.push(note)
}

const noteJuly17 = {
    subject: "More JS",
    date: "July 17th",
    feeling: "tired",
    timeSpent: 1,
    dateCreated: Date()
}

createNote(noteJuly17);

console.log(dailyNotes);

//to display notes in orderly manner
/*for (const dailyNote of dailyNotes) {
    console.log(`
    Note ${dailyNote.id}
    ${dailyNote.date}
    I learned ${dailyNote.subject}.
    I spent ${dailyNote.timeSpent} hours working on it.
    I felt ${dailyNote.feeling}.`) 
}*/

//searching for a specific term in array and displaying only the object with that term

// const searchTerm = "challenged"

// for (const dailyNote of dailyNotes) {
    
//     if (searchTerm === dailyNote.feeling) {
//         console.log(dailyNote)
//     }

// }

