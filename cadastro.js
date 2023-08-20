function cadastrar(){
    console.log("Calculando...");

    const codigo = (document.querySelector("#codigo").value).toUpperCase();
    const produto = document.querySelector("#produto").value;
    const quantidade = Number(document.querySelector("#quantidade").value);
    const preco = Number(document.querySelector("#preco").value);

    console.log(codigo, produto, quantidade, preco);
}