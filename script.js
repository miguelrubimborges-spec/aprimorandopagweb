const botoes = document.querySelectorAll("button");

            botoes.forEach((botao) => {
                botao.addEventListener("click", function() {
                    const contador = botao.querySelector("span");
                    
                    let curtidas = parseInt(contador.textContent);
                    curtidas++;
                    contador.textContent = curtidas;

                    botao.classList.remove("animar");
                    void botao.offsetWidth;
                    botao.classList.add("animar");
                });
            });