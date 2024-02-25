import { data } from "./data.js";
const divResultados = document.getElementById('resultados');


const createElements = (string, array, data) => {
    divResultados.innerHTML += `
    <div class="dias border border-3 rounded">
        <div class="bg-dark text-white">
            <h2>${string}</h2>
            <h2>${data}</h2>
        </div>
        ${array.map((e) =>
        e.aluno === "Vago" ? `<p class="bg-dark text-white fw-bold p-1">${e.horario} ${e.aluno}</p>` :
        `<p class="p-1 border-bottom border-dark">${e.horario}  ${e.aluno}</p>`).join(" ")}
    </div>
    `;
}

const dias = Object.entries(data);

dias.forEach((e) => {
    const dia = e[1];
    createElements(dia.title, dia.agenda, dia.data())
});