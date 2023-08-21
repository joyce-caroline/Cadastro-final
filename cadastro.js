function cadastrar() {

  const dadosProduto = new Map();

  //Entrada de Dados
  let codigo = document.querySelector("#codigo").value.toUpperCase();
  let produto = document.querySelector("#produto").value;
  let quantidade =  Number(document.querySelector("#quantidade").value);
  let preco = Number(document.querySelector("#preco").value);

  //Processamento
    
  dadosProduto.set("codigo", codigo);
  dadosProduto.set("produto", produto);
  dadosProduto.set("quantidade", quantidade);
  dadosProduto.set("preco", preco);

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
