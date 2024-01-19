import DepositModal from '../components/depositoModal.js';
import Api from './API.js';

export default class ApostaModal {
    constructor() {
      this.modal = document.getElementById('modalAposta');
      this.closeButton = this.modal.querySelector('.close');
      this.confirmApostaButton = this.modal.querySelector('#confirmarAposta');
      this.depositarButton = this.modal.querySelector('#depositar');
      this.quantiaInput = this.modal.querySelector('#quantia');
      this.ganhoInput = this.modal.querySelector('#ganho');
      // this.openButtons = this.modal.getElementById('.time-btn');
      
      this.depositModal = new DepositModal();

      
      this.api = new Api();

      this.teamname = null;
      this.winPercentage = null;
      this.diaJogo = null;
      this.setupEventListeners();
      this.quantiaInput = this.modal.querySelector('#quantia');
    }

  
    setupEventListeners() {
      this.closeButton.addEventListener('click', () => this.close());
      this.confirmApostaButton.addEventListener('click', () => this.confirmAposta());
      this.depositarButton.addEventListener('click', () => {
        this.close();
        this.depositModal.open();
      });
      this.quantiaInput.addEventListener('input', () => this.calculateGanho());

    }
  
    open(league,teamname, winPercentage, wins, totalGames, diaJogo) {
      this.league = league;
      this.teamname = teamname;
      this.winPercentage = winPercentage;
      this.wins = wins;
      this.totalGames = totalGames;
      this.diaJogo = diaJogo;
      this.ganhoInput.value = "";
      this.quantiaInput.value = ""; // Limpar o valor do campo de entrada de quantia
      this.modal.style.display = 'flex';
      

  }
  
    close() {
      this.modal.style.display = 'none';
      
    }
  
    confirmAposta() {
      const quantia = parseFloat(this.quantiaInput.value);
      const agora = new Date();
      const diaAposta = agora.toISOString().slice(0, 19).replace("T", " "); // Converte para o formato "YYYY-MM-DD HH:mm:ss"
      //const diaAposta = "2024-01-30 15:44:53"
      console.log(diaAposta);
      
      this.close();
      const winPercentageArredondado = parseFloat(this.winPercentage).toFixed(2);
      console.log(diaAposta);

      if(diaAposta<this.diaJogo){
      var aposta ={
        id_jogo : 1,
        equipe: this.teamname,
        diaJogo: this.diaJogo,
        diaAposta: diaAposta,
        valor: quantia,
        odds: winPercentageArredondado
       }

      this.api.apostar(aposta);
      }else alert("Apostas encerradas");
      console.log("Aposta: " + JSON.stringify(aposta, null, 2));
    }
  
    calculateGanho() {
      const odd = this.winPercentage;
      const quantia = parseFloat(this.quantiaInput.value);
      const ganho = quantia * odd || 0;
      this.ganhoInput.value = ganho.toFixed(2);
  }
}
  