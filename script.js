import { data } from "./data.js";
const divResultados = document.getElementById("resultados");

const createElements = (string, array, data) => {
  divResultados.innerHTML += `
    <div class="bg-white shadow-md rounded-2xl overflow-hidden">
      <div class="bg-gray-800 text-white p-4">
        <h2 class="text-xl font-semibold">${string}</h2>
        <h3 class="text-sm text-gray-300">${data}</h3>
      </div>
      <div class="p-4 space-y-2">
        ${array.map((e) => {
          const mensagem = encodeURIComponent(`Gostaria de agendar no horário: ${e.horario} • ${e.aluno}`);
          const link = `https://wa.me/5528999082744?text=${mensagem}`;
          
          return e.aluno.includes("Vago")
            ? `<a href="${link}" target="_blank" class="block bg-green-100 text-green-700 font-bold rounded px-2 py-1 hover:bg-green-200 transition">${e.horario} • ${e.aluno}</a>`
            : `<p class="border-b pb-1 text-gray-700">${e.horario} • ${e.aluno}</p>`;
        }).join("")}
      </div>
    </div>
  `;
};

const dias = Object.entries(data);

dias.forEach((e) => {
  const dia = e[1];
  createElements(dia.title, dia.agenda, dia.data());
});
