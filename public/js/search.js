const formEl = document.querySelector('.search')
const inputEl = document.querySelector('.model')
function handleSubmit(e){
    e.preventDefault()
    console.log('searhc form please work')
    // redirect them to the carlist route /carlist/${inputEl.value}
    
}



formEl.addEventListener('submit', handleSubmit )