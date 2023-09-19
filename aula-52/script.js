  function criaCulculadora () {

    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        
      inicia() {
        this.cliqueBotoes()
        this.pressionaEnter()
      },

      pressionaEnter() {
        this.display.addEventListener('keyup', e => {
          if(e.keycode === 13) {
            this.realizaConta();
          }
        });
      },

      realizaConta() {
        let conta = this.display.valeu;

        try {
          conta = eval(conta);

          if(!conta) {
            alert('Conta em valida'); 
            return;
          }

          this.display.valeu = String(conta);
        } catch(e) {
          alert('Conta em valida');
          return;
        }
      },

        clearDisplay() {
          this.display.valeu = '';
        },

        deleteOne() {
          this.display.valeu = this.display.valeu.slice(0, -1);
        },

      cliqueBotoes() {
        document.addEventListener('click', function(e) {
            const el = e.target;

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay();
            }

            if(el.classList.contains('btn-clear')) {
              this.clearDisplay();
            }

            if(el.classList.contains('btn-del')) {
              this.deleteOne();
            }

            if(el.classList.contains('btn-eq')) {
              this.realizaConta()
            }
        });
      },

      btnParaDisplay(valor) {
        this.display.valeu += valor;
      }

    };
  }

  const calculadora = criaCulculadora();