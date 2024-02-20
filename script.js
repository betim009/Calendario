import { data } from "./data.js";
const divResultados = document.getElementById('resultados');


const createElements = (string, array, data) => {
    divResultados.innerHTML += `
    <div class="dias">
        <h2>${string}</h2>
        <h2>${data}</h2>
        ${array.map((e) =>
        e.aluno === "Vago" ? `<p class="vago">${e.horario} ${e.aluno}</p>` :
        `<p>${e.horario}  ${e.aluno}</p>`).join(" ")}
    </div>
    `;
}

const dias = Object.entries(data);

dias.forEach((e) => {
    const dia = e[1];
    createElements(dia.title, dia.agenda, dia.data())
});