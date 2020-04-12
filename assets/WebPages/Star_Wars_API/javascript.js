let button = document.querySelector('#button');
let name = document.querySelector('#name');
let h3 = document.getElementsByTagName('h3');


function main()
{
  loadingicon();
  let random =  Math.floor((Math.random() * 87) + 1);
  let url = `https://swapi.co/api/people/${random}/`;

  axios.get(url).then(Response => {projekt(Response.data)}).catch(e => {error()})
}

function projekt(data){
    name.innerText= data.name;
    h3[0].innerHTML=`Gender: <p>${data.gender}</p>`;
    h3[1].innerHTML=`Birth year: <p>${data.birth_year}</p>`;
    h3[2].innerHTML=`Height: <p>${data.height}</p>`;
    h3[3].innerHTML=`Mass: <p>${data.mass}</p>`;
    h3[4].innerHTML=`Skin color: <p>${data.skin_color}</p>`;
    h3[5].innerHTML=`Eye color: <p>${data.eye_color}</p>`;
    h3[6].innerHTML=`Hair color: <p>${data.hair_color}</p>`;
}

function loadingicon(){
  name.innerHTML='<i class="fa fa-circle-o-notch fa-spin" style="color: #e4b601;font-size:75px;"></i>';
  for(let i=0;i<h3.length;i++){h3[i].innerHTML=``;}}

function error(){
  name.innerHTML='Error 404 the subject was not analyzed';
  for(let i=0;i<h3.length;i++){h3[i].innerHTML=``;}}

button.addEventListener('click',main);
