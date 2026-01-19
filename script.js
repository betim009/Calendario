import { data } from "./data.js";

const divResultados = document.getElementById("resultados");

const createElements = (title, agenda, dateInfo) => {
  const cardHtml = `
    <div class="bg-white shadow-md rounded-2xl overflow-hidden">
      <div class="bg-gray-800 text-white p-4">
        <h2 class="text-xl font-semibold">${title}</h2>
        <h3 class="text-sm text-gray-300">${dateInfo.displayWithYear}</h3>
      </div>
      <div class="p-4 space-y-2">
        ${agenda
          .map((slot) => {
            const mensagem = encodeURIComponent(
              `Alberto gostaria de agendar o horário de ${title}, ${dateInfo.display} às ${slot.horario}. Assim que possível pode me confirmar?`
            );
            const link = `https://wa.me/5528999082744?text=${mensagem}`;
            const destaque = slot.horario === "21h" || slot.horario === "12h";
            const aviso21h =
              (slot.horario === "21h" || slot.horario === "12h") &&
              slot.aluno.includes("Vago")
                ? " • esse horario nao ha desconto e nao ha certeza de agendar"
                : "";
            const linkClasses = destaque
              ? "block bg-amber-700 text-white font-bold rounded px-2 py-1 hover:bg-amber-800 transition"
              : "block bg-green-100 text-green-700 font-bold rounded px-2 py-1 hover:bg-green-200 transition";
            const textoClasses = destaque
              ? "border-b pb-1 bg-amber-700 text-white rounded px-2 py-1"
              : "border-b pb-1 text-gray-700";

            return slot.aluno.includes("Vago")
              ? `<a href="${link}" target="_blank" class="${linkClasses}">${slot.horario} • ${slot.aluno}${aviso21h}</a>`
              : `<p class="${textoClasses}">${slot.horario} • ${slot.aluno}${aviso21h}</p>`;
          })
          .join("")}
      </div>
    </div>
  `;

  divResultados.insertAdjacentHTML("beforeend", cardHtml);
};

for (const dia of Object.values(data)) {
  createElements(dia.title, dia.agenda, dia.data());
}
