import { data } from "./data.js";

const divResultados = document.getElementById("resultados");

const createElements = (title, agenda, dateInfo, dayKey) => {
  const cardHtml = `
    <div id="dia-${dayKey}" class="bg-white shadow-md rounded-2xl overflow-hidden">
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
                ? " • Horário sem desconto; disponibilidade sob confirmação."
                : "";
            const alunoDisplay = slot.aluno.includes("Vago")
              ? "Horário disponível - solicite agora."
              : slot.aluno;
            const alunoLabel = destaque && slot.aluno.includes("Vago")
              ? ""
              : ` • ${alunoDisplay}`;
            const linkClasses = destaque
              ? "block bg-amber-700 text-white font-bold rounded px-2 py-1 hover:bg-amber-800 transition"
              : "block bg-green-100 text-green-700 font-bold rounded px-2 py-1 hover:bg-green-200 transition";
            const textoClasses = destaque
              ? "block bg-amber-700 text-white font-bold rounded px-2 py-1"
              : "block bg-gray-100 text-gray-700 rounded px-2 py-1";

            return slot.aluno.includes("Vago")
              ? `<a href="${link}" data-link="${link}" data-title="${title}" data-horario="${slot.horario}" target="_blank" class="slot-link ${linkClasses}">${slot.horario}${alunoLabel}${aviso21h}</a>`
              : `<p class="${textoClasses}">${slot.horario}${alunoLabel}${aviso21h}</p>`;
          })
          .join("")}
      </div>
    </div>
  `;

  divResultados.insertAdjacentHTML("beforeend", cardHtml);
};

const diaOrdem = [
  "domingo",
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];

for (const [dayKey, dia] of Object.entries(data)) {
  createElements(dia.title, dia.agenda, dia.data(), dayKey);
}

const headerRegras = document.getElementById("header-regras");
const visitKey = "agenda_visitou";
const jaVisitou = localStorage.getItem(visitKey) === "1";
if (!jaVisitou) {
  localStorage.setItem(visitKey, "1");
} else if (headerRegras) {
  headerRegras.classList.add("hidden");
}

if (jaVisitou) {
  const diaAtualKey = diaOrdem[new Date().getDay()];
  const cardDiaAtual = document.getElementById(`dia-${diaAtualKey}`);
  if (cardDiaAtual) {
    cardDiaAtual.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const modal = document.getElementById("confirm-modal");
const modalText = document.getElementById("confirm-text");
const modalCancel = document.getElementById("confirm-cancel");
const modalSend = document.getElementById("confirm-send");

const closeModal = () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  modalSend.setAttribute("href", "#");
};

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const link = target.closest(".slot-link");
  if (link) {
    event.preventDefault();
    const titulo = link.getAttribute("data-title");
    const horario = link.getAttribute("data-horario");
    const href = link.getAttribute("data-link");
    if (horario === "12h" || horario === "21h") {
      modalText.textContent =
        "Esse horário há menos chances de confirmação de agendamento e não há desconto ou vínculo com pacotes.";
      modalSend.classList.remove("bg-green-600", "hover:bg-green-700");
      modalSend.classList.add("bg-amber-700", "hover:bg-amber-800");
    } else {
      modalText.textContent = `Deseja enviar a solicitação para ${titulo} às ${horario}?`;
      modalSend.classList.remove("bg-amber-700", "hover:bg-amber-800");
      modalSend.classList.add("bg-green-600", "hover:bg-green-700");
    }
    modalSend.setAttribute("href", href || "#");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    return;
  }

  if (target.id === "confirm-modal") {
    closeModal();
  }
});

modalCancel.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
