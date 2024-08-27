function criptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");

  
    let textoCriptografia = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCriptografia;
      tituloMensagem.textContent = "Texto descriptografado com sucesso";
      paragrafo.textContent = "";
    } else {
      tituloMensagem.textContent = "Nenhuma mensagem encontrada";
      paragrafo.textContent = "Insira o texto que deseja descriptografar ou criptografar";
      swal("Deve inserir um texto", "aviso");
    }
  }
  
  function descriptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
 
  
    let textoCriptografia = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCriptografia;
        tituloMensagem.textContent = "Texto descriptografado com sucesso.";
        paragrafo.textContent = "";
      } else {
        tituloMensagem.textContent = "Nenhuma mensagem encontrada";
        paragrafo.textContent = "Insira o texto que deseja descriptografar ou criptografar";
        swal("Deve inserir um texto", "aviso");
      }
  }