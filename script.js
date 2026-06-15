

// const validar = () => {
//     let email = document.getElementById("email").value;
//     let senha = document.getElementById("senha").value;
//     let texto = document.querySelector('h3')

//     if (email === "" && senha === "") {
//         texto.textContent = "Por favor, preencha todos os campos.";
//     } else {
//         texto.textContent = "Campos preenchidos corretamente.";
//     }

// }

function validar() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let texto = document.querySelector('h3');

    const emailCorreto = "admin@gmail.com";
    const senhaCorreta = "Ios12345";

    if (email === emailCorreto && senha === senhaCorreta) {
        texto.textContent = "Login bem-sucedido!";
    } else {
        texto.textContent = "Email ou senha incorretos. Tente novamente.";
    }
}
