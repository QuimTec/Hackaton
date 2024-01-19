
export default class Api {


    async getSaldoUsuario() {
    var minhaRequisicao = new Request("http://localhost:3000/saldo");

    const response = await fetch(minhaRequisicao, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    });
    if (response.status === 200) {
      return response.json(); // Retorna a resposta do servidor
    } else {
      throw new Error("Erro ao obter o saldo do usuário");
    }
  }

  atualizarSaldo() {
        this.getSaldoUsuario().then(data => {
        console.log("atualizar saldo teste: " + data);
        document.getElementById("saldo").innerText = data;
    }).catch(error => {
        console.error("Erro ao obter o saldo do usuário:", error);
    });
  }

  async getDadosUsuario() {
    try {
      var minhaRequisicao = new Request("http://localhost:3000/usuario");

      const response = await fetch(minhaRequisicao, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      });

      if (response.status === 200) {
        const userData = await response.json();
        return userData;
      } else {
        console.error("Erro ao obter dados do usuário:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      return null;
    }
  }

  async addSaldo (valorDeposito) {
    console.log(valorDeposito);
    console.log(typeof valorDeposito);
      var deposito = {   
        valor: valorDeposito
    };
    try {
    var minhaRequisicao = new Request("http://localhost:3000/usuario/addSaldo");
      const response = await fetch(minhaRequisicao,{
        method: "PUT",
        headers:{
            Accept: "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(deposito)
      }); 
        if (response.status === 200) {
       window.location.reload();
        }
        return response.text();
      
    } catch (error) {
      console.error("Erro na requisição:", error);
      return null;
    }
  }

  async apostar (aposta) {
     
    try {
    var minhaRequisicao = new Request("http://localhost:3000/apostar");
      const response = await fetch(minhaRequisicao,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(aposta)
      }); 
        if (response.status === 200) {
      window.location.reload();
        } return response.text();
      
    } catch (error) {
      console.error("Erro na requisição:", error);
      return null;
    }
  }

}
  
  