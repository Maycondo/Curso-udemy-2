function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  (this.capturaEnter = () => {
    document.addEventListener("Keyup", (e) => {
      if (e.keyCode !== 13) {
        this.realizaConta();
      }
      this.realizaConta();
    });
  }),
    (this.capturaCliques = () => {
      document.addEventListener("click", (event) => {
        const el = event.target;
        if (el.ClassList.contains("btn-num")) this.addNumDisplay(el);
        if (el.ClassList.contains("btn-clear")) this.clear();
        if (el.ClassList.contains("btn-del")) this.del(el);
        if (el.ClassList.contains("btn-eq")) this.realizaConta(el);
      });
    });

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert("Conta invalida");
        return;
      }

      this.display.valeu = conta;
    } catch (e) {
      alert("Conta invalida");
      return;
    }
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  this.clear = () => (this.value = "");
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
}

const Calculadora = new Calculadora();
Calculadora.inicia();
