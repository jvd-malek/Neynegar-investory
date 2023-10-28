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
const closeMenuBtn = $.querySelector('#closeMenuBtn')
let itemFragment = $.createDocumentFragment()
let flag = true
let listItems = [1,2,3,4]


listItems.forEach(function (item) {
    let container = $.createElement('div')
    container.className = "w-1/3 shadow rounded m-4 transition-all ease-in duration-300 delay-100 relative "
    let h2 = $.createElement('h2')
    h2.className = "bg-white inline-block absolute top-0 left-0 right-0 w-12 mx-auto text-center rounded-b"
    h2.innerHTML = "title"
    let svg = $.createElement('div')
    let description = $.createElement('div')
    description.className = "flex justify-between px-2 py-1 items-center flex-wrap gap-2"
    let spanOne = $.createElement('span')
    spanOne.className = "font-bold text-xs w-1/3"
    spanOne.innerHTML = "count"
    let spanTwo = $.createElement('span')
    spanTwo.className = "text-xs"
    spanTwo.innerHTML = 2
    let descriptionTwo = $.createElement("div")
    descriptionTwo.className = "hidden flex justify-between px-2 py-1 items-center flex-wrap gap-2"
    descriptionTwo.insertAdjacentHTML('beforeend' , '<span class="text-xs w-1/3"><span class="font-bold">buy</span><br><span class="">25.000</span></span><span class="text-xs w-1/3"><span class="font-bold">sell</span><br><span class="">25.000</span></span><span class="text-xs w-1/3"><span class="font-bold">count</span><br><span class="">2</span></span>')
    let editBtn = $.createElement('button')
    editBtn.className = "bg-[#edddfb] py-1 px-2 rounded text-sm"
    editBtn.innerHTML = "Edit"
    descriptionTwo.append(editBtn)
    
    description.append(spanOne,spanTwo)
    container.append(svg ,h2 ,description , descriptionTwo)
    itemFragment.append(container)
    svg.insertAdjacentHTML('beforeend' , '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-auto rounded bg-[#dcfafe]"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>')

    svg.addEventListener('click' , function () {
        editModeHandler(description , descriptionTwo) 
    })
    editBtn.addEventListener('click' , function () {
        editBtnHandler(container , h2 , description , descriptionTwo , svg) 
    })
    
})
listItemsElm.append(itemFragment)

function editModeHandler(description , descriptionTwo) {
    description.classList.toggle('hidden')
    descriptionTwo.classList.toggle('hidden')
}

function editBtnHandler(container , h2 , description , descriptionTwo , svg) {
    console.log(container ,h2);
    setTimeout(() => {
        container.classList.add("w-[11.5rem]")
        h2.classList.remove("absolute")
        h2.classList.add("text-xl")
        h2.classList.add("font-bold")
        svg.className = "w-[50px] p-2 transition-all ease-in duration-300 inline-block"
    }, 20);
    description.classList.add('hidden')
    descriptionTwo.classList.add('hidden')
}

closeMenuBtn.addEventListener('click' , function (event) {
    moduleElm.classList.add('hidden')
    secTwo.classList.remove('blur')
})

function menuHandler(event) {
    moduleElm.classList.remove('hidden')
    moduleElm.classList.add('top-0')
    secTwo.classList.add('blur')
    setTimeout(() => {

        moduleElm.classList.add('top-1/2')
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
