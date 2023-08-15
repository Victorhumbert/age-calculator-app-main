export default function initTempoVivo() {
  const dataAtual = new Date();
  const btn = document.querySelector("button");
  const li = document.querySelectorAll("form li");
  const tempoVivo = document.querySelectorAll(".idade h1 span");
  const inputs = document.querySelectorAll("input");
  const data = {
    ano: document.getElementById("ano"),
    mes: document.getElementById("mes"),
    dia: document.getElementById("dia"),
  };
  const inputInvalido = document.querySelectorAll("[data-input='invalid']");
  const inputNull = document.querySelectorAll("[data-input='null']");

  function limpar() {
    li.forEach((lis) => {
      lis.removeAttribute("class", "");
    });
  }

  let validador = true;

  if (btn && li) {
    function submit(btn) {
      limpar();
      btn.preventDefault();

      inputs.forEach((item) => {
        item = item.setAttribute("data", `${item.value}`);
      });

      const dataNascimento = new Date(
        `${data.ano.value}-${data.mes.value}-${data.dia.value}`
      );

      const idade =
        (dataAtual - dataNascimento) / (1000 * 60 * 60 * 24 * 365.25);
      const anos = parseInt(idade);
      const meses = parseInt((idade - anos) * 12);
      const dias = parseInt(
        idade * 365.25 - (anos * 365.25 + (meses / 12) * 365.25)
      );
      if (data.dia.value <= 31 && data.dia.value) {
        if (data.mes.value <= 12 && data.mes.value) {
          if (
            data.ano.value <= dataAtual.getFullYear() &&
            data.ano.value >= 1920
          ) {
            tempoVivo[0].innerText = anos;
            tempoVivo[2].innerText = dias;
            tempoVivo[1].innerText = meses;
            if (tempoVivo[2].innerText == dataAtual.getDate() + 1) {
              tempoVivo[2].innerText = dias + 1;
            }
          }
        }
      } else {
        li.forEach((item) => {
          item.classList.add("input-null");
          inputNull.forEach((item) => {
            item.classList.add("ativo");
          });
        });

        if (
          (data.ano.value != 0 ||
            (data.ano.value < 1920 &&
              data.ano.value > dataAtual.getFullYear())) &&
          (data.mes.value != 0 || data.mes.value > 12) &&
          (data.dia.value != 0 || data.dia.value > 31)
        ) {
          li.forEach((item) => {
            item.classList.remove("input-null");
            inputNull.forEach((item) => {
              item.classList.remove("ativo");
            });
            item.classList.add("input-invalido");
            inputInvalido.forEach((item) => {
              item.classList.add("ativo");
            });
          });
        }
      }
    }

    btn.addEventListener("click", submit);
  }
}
