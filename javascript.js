let array_link = [];
let insert_link;


function addLink(val) {
  const newElement = document.createElement("div");
  newElement.className = `link`;
  document.getElementById("shorten").after(newElement);
  newElement.innerHTML = `
  <div class="new_container">
  ${val}
  <button class="copy"></button>
</div>`;
console.log(newElement,"seconda_funzione")
  }

function insert() {
    insert_link = document.getElementById("new-link");
    array_link.push(insert_link.value);
    addLink(insert_link.value);
    document.getElementById("new-link").value = "";
    console.log(array_link,insert_link,"prima_funzione")
}

  function func_container(){
    insert();
    addLink(insert_link);
  }
 
 
  /*let button = document.getElementById('press');
  let add_link = document.getElementById('new-link');
  let advanced = document.getElementsByClassName('title_second_half');
  function change(){
      advanced.innerHTML = `nuovo${name}`;
}

button.addEventListener('click', () =>{
    change(advanced.value);
});
 */
  