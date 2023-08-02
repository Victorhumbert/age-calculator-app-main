export default function initTempoVivo() {
  const dataAtual = new Date();
  const btn = document.querySelector("button");

  if (btn) {
    function submit(btn) {
      btn.preventDefault();
      const data = {
        ano: document.getElementById("ano"),
        mes: document.getElementById("mes"),
        dia: document.getElementById("dia"),
      };

      const dataNascimento = new Date(
        `${data.ano.value}-${data.mes.value}-${data.dia.value}`
      );

      const idade =
        (dataAtual - dataNascimento) / (1000 * 60 * 60 * 24 * 365.25);
        
      if (idade) {
        if (data.dia.value > 0 && data.dia.value <= 31) {
          if (data.mes.value > 0 && data.mes.value <= 12) {
            if (
              data.ano.value > 1920 &&
              data.ano.value <= dataAtual.getFullYear()
            ) {
              const anos = parseInt(idade);
              const meses = parseInt((idade - anos) * 12);
              const dias = parseInt(
                idade * 365.25 - (anos * 365.25 + (meses / 12) * 365.25)
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
