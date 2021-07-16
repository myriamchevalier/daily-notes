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
    timeSpent: 6
}

dailyNotes.push(noteJuly16);

//to display notes in order manner
/*for (const dailyNote of dailyNotes) {
    console.log(`
    Note ${dailyNote.id}
    ${dailyNote.date}
    I learned ${dailyNote.subject}.
    I spent ${dailyNote.timeSpent} hours working on it.
    I felt ${dailyNote.feeling}.`) 
}*/

//searching for a specific term in array and displaying only the object(s) with that term

const searchTerm = "challenged"

for (const dailyNote of dailyNotes) {
    
    if (searchTerm === dailyNote.feeling) {
        console.log(dailyNote)
    }
    
}

