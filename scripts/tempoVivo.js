export default function initTempoVivo() {
  const dataAtual = new Date();
  const btn = document.querySelector("button");

  if (btn) {
    function submit(btn) {
      btn.preventDefault();
      const data = {
        ano: document.getElementById("ano").value,
        mes: document.getElementById("mes").value,
        dia: document.getElementById("dia").value,
      };
      const dataNascimento = new Date(`${data.ano}-${data.mes}-${data.dia}`);

      const idade =
        (dataAtual - dataNascimento) / (1000 * 60 * 60 * 24 * 365.25);
      if (idade) {
        if (data.dia > 0 && data.dia <= 31) {
          if (data.mes > 0 && data.mes <= 12) {
            if (data.ano > 1920 && data.ano <= dataAtual.getFullYear()) {
              let anos = parseInt(idade);
              let meses = parseInt((idade - anos) * 12);
              let dias = parseInt(
                idade * 365.25 - anos * 365.25 + (meses / 12) * 365.25
              );
              const tempoVivo = document.querySelectorAll(".idade h1 span");
              tempoVivo[0].innerText = anos;
              tempoVivo[1].innerText = meses;
              tempoVivo[2].innerText = dias;
            }
          }
        }
      } else {
        console.log("erro");
        return "erro";
      }
    }

    btn.addEventListener("click", submit);
  }
}
