
let noteList = document.getElementById("main-list")
let inputNoteText = document.getElementById("input-new-note")

let noteCounter = localStorage.getItem("NoteCounter") || 0
    noteCounter = JSON.parse(noteCounter)
let userNotes = localStorage.getItem("Notes")
    userNotes = JSON.parse(userNotes) || []

let notesFiltered = []

let searchValue;

let checksInputs;


printNotes(userNotes)
    
    // createNotes("Pasear al perro")
    // createNotes("Dar de comer al gato")

function statusChange(status) {
    let buttonStatus = document.querySelectorAll(status)
        buttonStatus.forEach(e =>{
            e.addEventListener('click', (e) => console.log(e.target))
        })
    
    
    // if (status === 'complete') {
    //     console.log('si');
    // }else{
    //     console.log('no');
    // }
}


function filtNotes() {
    let notesCheck = filterStatus(userNotes)
    let valueSearch = document.getElementById("search").value
    
    notesFiltered =filterText(valueSearch,notesCheck)
    
    printNotes(notesFiltered)
}


function filterStatus(arrayNotes) {
    let inputsChecks = [...document.getElementsByClassName("filter-check")]
    let filteredByCheck = arrayNotes
    let array = []

    inputsChecks = inputsChecks.filter(e => e.checked) 



    inputsChecks.map(e => 

        (array = array.concat(
            filteredByCheck.filter(
            note => note.status === e.name
        ))))
    

    if (array.length !== 0) {
        return array
    } else {
        return arrayNotes
    }
    

    
    
}


function filterText(text,arrayNotes) {
    
    let notesFilteredByText = arrayNotes.filter(e => e.activty.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    console.log(notesFilteredByText);
    return notesFilteredByText
}


function storageNotes(notes) {
    localStorage.setItem("Notes",JSON.stringify(notes))
    
}


// 
function printNotes(notes) {
    noteList.innerHTML = ''
    notes.forEach((element,i) => {
        noteList.innerHTML += `
        <div class='${element.status}'>
            <p>${element.activty}</p>
            <div>
                <button>Editar</button>
                <button>Borar</button>
                <button class='status ${element.status}' id="${element.id}">${element.status}</button>

            </div>
        </div>
        `
        
    })
    statusChange('.status')
    
}

function createNotes(text) {
    noteList.innerHTML = ''
    if (text === "") {
        alert("Necesitas escribir una tarea")
    } else {
        
        let newNote= {
            activty: text,
            status: "pending",
            id: noteCounter,
        }
        userNotes.unshift(newNote)
        storageNotes(userNotes)
        printNotes(userNotes)
    }
    noteCounter++
    localStorage.setItem("NoteCounter", JSON.stringify(noteCounter))
}


function deleteNote(note, arrayNotes) {
    
}


