const list = document.querySelectorAll('.list')
const active = document.getElementById('indicator')

function activeLink() {
    list.forEach((item) =>{
        item.classList.remove('active')
        active.classList.remove('indicator1','indicator2','indicator3','indicator4','indicator5')
});
    this.classList.add('active')
    active.classList.add(this.id)
}
    list.forEach((item)=>
      item.addEventListener('click',activeLink)
    );
