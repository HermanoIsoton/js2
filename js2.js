// ex1
const p1 = document.getElementById("p1");
const b1 = document.getElementById("b1");

b1.addEventListener("click", () => {
  p1.textContent = "Gladston";
});

// ex2
const p2 = document.getElementById("p2");
const i1 = document.getElementById("i1");

i1.addEventListener("input", function () {
  p2.textContent = i1.value;
});

// ex3
const m1 = document.getElementById("m1");
const b2 = document.getElementById("b2");

b2.addEventListener("dblclick", () => {
  m1.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIx5S4nr5evdioCiVZbWqCqVYeqnxQh2z4au9j1C8dEQ&s=10";
});

// ex4
const b3 = document.getElementById("b3");

const dica = document.getElementById("dica");
b3.addEventListener("mouseover", () => {
  dica.textContent = "dica do botao";
});
b3.addEventListener("mouseout", () => {
  dica.textContent = "";
});

// ex5
const numLetras = document.getElementById("numeroLetras");
const campo = document.getElementById("texto");
campo.addEventListener("input", () => {
  const texto = campo.value;
  numLetras.textContent = texto.length;
});

// ex6
const txt = document.getElementById("txt");
const send = document.getElementById("enviar");
send.addEventListener("click", function () {
  if (txt.value != "") {
    txt.value = "enviado!";
  } else {
    txt.value = "Campo Obrigatorio!";
  }
});

// ex7
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    alert("voce apertou esc!");
  }
});

// ex 8
const largura = document.getElementById("largura");
const altura = document.getElementById("altura");
window.addEventListener("resize", function () {
  largura.textContent = window.innerHeight;
  altura.textContent = window.innerWidth;
});

// ex9
let alturaTotal = document.body.scrollHeight;
let alturaTela = window.innerHeight;
const p = document.createElement("p");
p.textContent = "fim";
window.addEventListener("scroll", function () {
  let scrol = window.scrollY;
  if((alturaTela + scrol) > (alturaTotal - 50)){
    document.body.appendChild(p);   
  }
});

// ex 10
const tarefas = document.getElementById("tarefas");
const adicionar = document.getElementById("novaTarefa"); 
function novaTarefa(){
  const novaTarefa = document.createElement("li"); 
   tarefas.appendChild(novaTarefa);
    novaTarefa.textContent = "nova tarefa";
    novaTarefa.addEventListener("dblclick", () => {
    novaTarefa.remove();
    });
}
adicionar.addEventListener("click", novaTarefa);
document.addEventListener("keydown", novaTarefa);
  

