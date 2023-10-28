let $ = document
// const submitBtn = $.querySelector('#submit')
// const deleteBtn = $.querySelector('#btn')
// const titleElm = $.querySelector('#title')
// const authorElm = $.querySelector('#author')
// const yearElm = $.querySelector('#year')
const listItemsElm = $.querySelector('#items')
const searchBox = $.querySelector('#searchBox')
const menu = $.querySelector('#menu')
const moduleElm = $.querySelector('#module')
const secTwo = $.querySelector('#secTwo')
let itemFragment = $.createDocumentFragment()
let listItems = [1,2,3,4]


listItems.forEach(function (item) {
    listItemsElm.insertAdjacentHTML('beforeend' , '<div class="w-1/3 shadow in rounded m-4 transition-transform ease-in duration-300 delay-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-auto rounded bg-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg><div class="flex justify-between px-2 py-1 items-center"><h2>title</h2><span class="text-xs">count: 2</span></div></div>')
})


function menuHandler(event) {
    moduleElm.classList.toggle('hidden')
    moduleElm.classList.toggle('top-0')
    secTwo.classList.toggle('blur')
    setTimeout(() => {
        moduleElm.classList.toggle('top-1/2')
    }, 20);
}

// function submitHandler(event) {
//     // event.preventDefault()
//     if (titleElm.value === '' || authorElm.value === '' || yearElm.value === '') {
//         alert('please fill the form correctly.')
//     }
//     else {
        
//         let value = {
//             id: values.length,
//             title: titleElm.value,
//             author: authorElm.value,
//             year: yearElm.value
//         }
//         values.push(value)
//         localStorage.setItem('listItemsElm' , JSON.stringify(values))
    
//         let table = $.createElement('tr')
//         table.id = values.length -1
//         let title = $.createElement('th')
//         title.innerHTML = titleElm.value
//         let author = $.createElement('th')
//         author.innerHTML = authorElm.value
//         let year = $.createElement('th')
//         year.innerHTML = yearElm.value
//         let deleteBtn = $.createElement('button')
//         deleteBtn.innerHTML = 'delete'
//         deleteBtn.className = 'btn btn-warning'
//         deleteBtn.id = 'btn'
//         year.append(deleteBtn)
//         table.append(title,author,year)
//         listItemsElm.append(table)
//         deleteBtn.addEventListener('click' , deleteHandler)
    
//         titleElm.value = ''
//         authorElm.value = ''
//         yearElm.value = ''
//         titleElm.focus()

//     }
// }

function loadHandler(event) {
    searchBox.classList.add('translate-y-[-2rem]')
    let localData = localStorage.getItem('listItemsElm')
    let data = JSON.parse(localData)
    if (data) {
        console.log(data);
        data.forEach( function (item){
            titleElm.value = item.title
            authorElm.value = item.author
            yearElm.value = item.year
            submitHandler()
        })
    }
}

// function submittHandler(event) {
//     event.preventDefault()
// }

// function deleteHandler(event) {
//     let ID = this.parentElement.parentElement.id
//     this.parentElement.parentElement.remove()
//     let localData = localStorage.getItem('listItemsElm')
//     let data = JSON.parse(localData)

//     if (data) {
//        let n = data.find(function (item) {
//             return item.id == ID
//        })
//        let index = data.indexOf(n)
//        data.splice(index , 1)
//        localStorage.clear()
//        localStorage.setItem('listItemsElm' , JSON.stringify(data))
//     }
//     // this.parentElement.parentElement.remove()
// }

// submitBtn.addEventListener('click' , submitHandler)
// submitBtn.addEventListener('click' , submittHandler)
window.addEventListener('load' , loadHandler)
menu.addEventListener('click' , menuHandler)