function cadastrar() {
  console.log("Calculando...");

  const dadosProduto = new Map();

  //Entrada de Dados
  dadosProduto.set(
    "codigo",
    document.querySelector("#codigo").value.toUpperCase()
  );
  dadosProduto.set("produto", document.querySelector("#produto").value);
  dadosProduto.set(
    "quantidade",
    Number(document.querySelector("#quantidade").value)
  );
  dadosProduto.set("preco", Number(document.querySelector("#preco").value));

  // console.log('codigo: ', dadosProduto.get('codigo'));
  // console.log('produto: ', dadosProduto.get('produto'));
  // console.log('quantidade: ', dadosProduto.get('quantidade'));
  // console.log('preco: ', dadosProduto.get('preco'));
  // console.log('total: ', dadosProduto.get('total'));

  //Processamento
  dadosProduto.set(
    "total",
    dadosProduto.get("quantidade") * dadosProduto.get("preco")
  );

  //Saída
  document.querySelector("table").innerHTML += `<tr>
    <td>${dadosProduto.get("codigo")}</td>
    <td>${dadosProduto.get("produto")}</td>
    <td>${dadosProduto.get("quantidade")}</td>
    <td>${dadosProduto.get("preco")}</td>
    <td>${dadosProduto.get("total")}</td>
</tr>`;
}
