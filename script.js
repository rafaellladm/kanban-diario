const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')
const nightMode = document.querySelector('#night-mode')
const bodyClas = document.querySelector('body')


cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')

}

function drag() {

}

function dragend() {
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')

}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {

}

function dragover() {
    this.classList.add('over')

    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}

function dragleave() {
    this.classList.remove('over')
}

function drop() {
    this.classList.remove('over')
}

nightMode.addEventListener('click', () => {
    bodyClas.classList.toggle('night-mode')
})


const priority = ['urgente', 'alta', 'normal', 'baixa']

const inputTasks = document.querySelector('assignment')

const dropZone = document.querySelector('#add')

const buttonDel = document.querySelector('.del')
const buttonOk = document.querySelector('.button button')


const buttonAdd = document.querySelector('.add')
const close = document.querySelector('.header a')
const modal = document.querySelector('#modal-add')


buttonAdd.addEventListener('click', () => {
    modal.classList.remove('hide')
})

close.addEventListener('click', () => {
    modal.classList.add('hide')
})

buttonOk.addEventListener('click', () => {

})

// function priorityBox() {
//     const prioritySelect = document.querySelector('select[nome=priority]')

//     for( const p of priority) {
//         return prioritySelect.innerHTML += `<option value="${p}">${p}</option>`

// }

// priorityBox()
