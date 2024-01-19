import Api from '../components/API.js';

export default class DepositModal {
    constructor() {
      this.modal = document.getElementById('depositModal');
      this.closeButton = document.getElementById('closeModalBtn');
      this.confirmDepositButton = document.getElementById('confirmDepositBtn');
      this.moneyButton = document.getElementById('moneyBtn');
      this.depositForm = document.getElementById('depositForm');
      
      this.api = new Api();

      this.setupEventListeners();
    }
  
    setupEventListeners() {
      this.closeButton.addEventListener('click', () => this.close());
      this.confirmDepositButton.addEventListener('click', () => this.confirmDeposit());
      this.moneyButton.addEventListener('click', () => this.open());
    }
  
    open() {
      this.modal.style.display = 'flex';
    }
  
    close() {
      this.modal.style.display = 'none';
    }
  
    confirmDeposit() {
      const valorDeposito = parseFloat(document.getElementById('valorDeposito').value);

      if (valorDeposito<1) {
        alert("Valor inválido.");
        return;
    }
     this.api.addSaldo(valorDeposito);
     this.close();
    }
  }

  