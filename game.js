// Lógica principal do jogo
class BiblicalGame {
  constructor() {
    this.currentLevel = 1;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.questions = [];
    this.userAnswers = [];
    this.gameState = 'menu'; // menu, playing, finished
    this.startTime = null;
    this.endTime = null;
    this.unlockedLevels = [1];
    this.levelScores = {};
    
    this.init();
  }
  
  init() {
    this.loadProgress();
    this.updateLevelButtons();
    this.setupEventListeners();
    this.initializeTheme();
  }
  
  // Gerenciamento de tema
  initializeTheme() {
    const savedTheme = localStorage.getItem('biblical-game-theme') || 'light';
    this.setTheme(savedTheme);
  }
  
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('biblical-game-theme', theme);
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
      themeToggle.setAttribute('aria-label', 
        theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'
      );
    }
  }
  
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
    this.showToast(`Tema ${newTheme === 'dark' ? 'escuro' : 'claro'} ativado`);
  }
  
  // Event listeners
  setupEventListeners() {
    // Tema
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    
    // Prevenção de trapaça (F12, Ctrl+U, etc.)
    this.setupAntiCheat();
  }
  
  setupAntiCheat() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        this.showToast('Ação não permitida durante o jogo', 'error');
      }
    });
    
    document.addEventListener('contextmenu', (e) => {
      if (this.gameState === 'playing') {
        e.preventDefault();
        this.showToast('Menu de contexto desabilitado durante o jogo', 'error');
      }
    });
  }
  
  handleKeyPress(e) {
    if (this.gameState === 'playing') {
      const num = parseInt(e.key);
      if (num >= 1 && num <= 4) {
        const optionBtn = document.querySelector(`.option-btn:nth-child(${num})`);
        if (optionBtn && !optionBtn.disabled) {
          optionBtn.click();
        }
      }
      
      if (e.key === 'Enter') {
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn && nextBtn.style.display !== 'none') {
          nextBtn.click();
        }
      }
      
      if (e.key === 'Escape') {
        if (confirm('Tem certeza que deseja sair do jogo atual?')) {
          this.goHome();
        }
      }
    }
  }
  
  // Gerenciamento de progresso
  loadProgress() {
    const saved = localStorage.getItem('biblical-game-progress');
    if (saved) {
      try {
        const progress = JSON.parse(saved);
        this.unlockedLevels = progress.unlockedLevels || [1];
        this.levelScores = progress.levelScores || {};
      } catch (e) {
        console.error('Erro ao carregar progresso:', e);
        this.resetProgress();
      }
    }
  }
  
  saveProgress() {
    const progress = {
      unlockedLevels: this.unlockedLevels,
      levelScores: this.levelScores,
      lastPlayed: new Date().toISOString()
    };
    
    try {
      localStorage.setItem('biblical-game-progress', JSON.stringify(progress));
    } catch (e) {
      console.error('Erro ao salvar progresso:', e);
      this.showToast('Erro ao salvar progresso', 'error');
    }
  }
  
  resetProgress() {
    this.unlockedLevels = [1];
    this.levelScores = {};
    this.saveProgress();
    this.showToast('Progresso resetado com sucesso');
    this.updateLevelButtons();
  }
  
  // Controle de níveis
  updateLevelButtons() {
    for (let i = 1; i <= GAME_DATA.config.maxLevels; i++) {
      const btn = document.getElementById(`level${i}Btn`);
      if (btn) {
        const isUnlocked = this.unlockedLevels.includes(i);
        btn.disabled = !isUnlocked;
        
        const lockIcon = btn.querySelector('.lock-icon');
        if (lockIcon) {
          lockIcon.style.display = isUnlocked ? 'none' : 'block';
        }
        
        btn.setAttribute('aria-label', `Nível ${i} - ${this.getLevelName(i)}${isUnlocked ? '' : ' (Bloqueado)'}`);
        
        if (this.levelScores[i]) {
          btn.setAttribute('title', `Melhor pontuação: ${this.levelScores[i]}%`);
        }
      }
    }
  }
  
  getLevelName(level) {
    return GAME_DATA.levels[level]?.name || ['Básico', 'Intermediário', 'Avançado', 'Expert', 'Mestre'][level-1] || 'Desconhecido';
  }
  
  checkLevel(level) {
    if (!this.unlockedLevels.includes(level)) {
      this.showLockedMessage();
      return false;
    }
    this.startGame(level);
    return true;
  }
  
  showLockedMessage() {
    const message = document.getElementById('lockedMessage');
    if (message) {
      message.style.display = 'block';
      setTimeout(() => message.style.display = 'none', 3000);
    }
  }
  
  // Controle do jogo
  async startGame(level) {
    try {
      this.showLoading(true);
      
      this.currentLevel = level;
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.userAnswers = [];
      this.gameState = 'playing';
      this.startTime = new Date();
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      this.questions = getLevelQuestions(level);
      
      if (!this.questions || this.questions.length === 0) {
        throw new Error('Nenhuma pergunta encontrada para este nível');
      }
      
      this.showScreen('quiz');
      this.updateLevelIndicator();
      this.displayQuestion();
      
      this.showLoading(false);
      this.showToast(`Nível ${level} iniciado! Boa sorte! 🙏`);
      
    } catch (error) {
      console.error('Erro ao iniciar jogo:', error);
      this.showLoading(false);
      this.showToast('Erro ao carregar o jogo. Tente novamente.', 'error');
      this.goHome();
    }
  }
  
  displayQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    if (!question) return;
    
    document.getElementById('question').textContent = question.pergunta;
    document.getElementById('questionCounter').textContent = 
      `Pergunta ${this.currentQuestionIndex + 1} de ${this.questions.length}`;
    
    this.updateProgress();
    this.updateScore();
    this.createOptions(question.opcoes);
    this.hideFeedback();
    this.hideNextButton();
    
    setTimeout(() => {
      const firstOption = document.querySelector('.option-btn');
      if (firstOption) firstOption.focus();
    }, 100);
  }
  
  createOptions(opcoes) {
    const container = document.getElementById('options');
    container.innerHTML = '';
    
    opcoes.forEach((opcao, index) => {
      const button = document.createElement('button');
      button.className = 'option-btn';
      button.innerHTML = `<span class="option-number">${index + 1}.</span> ${opcao}`;
      button.setAttribute('aria-label', `Opção ${index + 1}: ${opcao}`);
      button.onclick = () => this.selectAnswer(index);
      container.appendChild(button);
    });
  }
  
  selectAnswer(selectedIndex) {
    const question = this.questions[this.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correta;
    
    this.userAnswers.push({
      questionIndex: this.currentQuestionIndex,
      selectedAnswer: selectedIndex,
      correctAnswer: question.correta,
      isCorrect,
      timeSpent: new Date() - this.startTime
    });
    
    if (isCorrect) this.score++;
    
    this.showAnswerFeedback(selectedIndex, question.correta);
    this.showFeedback(question.explicacao, isCorrect);
    this.showNextButton();
    this.updateScore();
  }
  
  showAnswerFeedback(selectedIndex, correctIndex) {
    document.querySelectorAll('.option-btn').forEach((option, index) => {
      option.disabled = true;
      if (index === correctIndex) {
        option.classList.add('correct');
      } else if (index === selectedIndex) {
        option.classList.add('incorrect');
      }
    });
  }
  
  showFeedback(explicacao, isCorrect) {
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `
      <div style="display: flex; gap: 10px; align-items: center;">
        <span style="font-size: 1.5em;">${isCorrect ? '✅' : '❌'}</span>
        <div>
          <strong>${isCorrect ? 'Correto!' : 'Incorreto!'}</strong>
          <p style="margin-top: 5px;">${explicacao}</p>
        </div>
      </div>
    `;
    feedback.style.display = 'block';
  }
  
  hideFeedback() {
    document.getElementById('feedback').style.display = 'none';
  }
  
  showNextButton() {
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.style.display = 'block';
    nextBtn.focus();
  }
  
  hideNextButton() {
    document.getElementById('nextBtn').style.display = 'none';
  }
  
  nextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.finishGame();
    } else {
      this.displayQuestion();
    }
  }
  
  finishGame() {
    this.endTime = new Date();
    this.gameState = 'finished';
    
    const percentage = Math.round((this.score / this.questions.length) * 100);
    
    // Atualizar melhores pontuações
    if (!this.levelScores[this.currentLevel] || percentage > this.levelScores[this.currentLevel]) {
      this.levelScores[this.currentLevel] = percentage;
    }
    
    // Desbloquear próximo nível se necessário
    if (percentage >= GAME_DATA.config.passingScore && this.currentLevel < GAME_DATA.config.maxLevels) {
      const nextLevel = this.currentLevel + 1;
      if (!this.unlockedLevels.includes(nextLevel)) {
        this.unlockedLevels.push(nextLevel);
        this.showToast(`🎉 Nível ${nextLevel} desbloqueado!`);
      }
    }
    
    this.saveProgress();
    this.showResults(percentage);
  }
  
  showResults(percentage) {
    const result = getResultMessage(percentage);
    
    document.getElementById('resultIcon').textContent = result.icon;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultScore').textContent = `${this.score}/${this.questions.length} (${percentage}%)`;
    document.getElementById('resultMessage').textContent = result.message;
    
    document.getElementById('correctAnswers').textContent = this.score;
    document.getElementById('totalQuestions').textContent = this.questions.length;
    document.getElementById('accuracyPercentage').textContent = `${percentage}%`;
    
    const nextLevelBtn = document.getElementById('nextLevelBtn');
    const canAdvance = percentage >= GAME_DATA.config.passingScore && this.currentLevel < GAME_DATA.config.maxLevels;
    nextLevelBtn.style.display = canAdvance ? 'flex' : 'none';
    if (canAdvance) {
      nextLevelBtn.textContent = `⭐ Nível ${this.currentLevel + 1}`;
    }
    
    this.showScreen('result');
  }
  
  // Navegação entre telas
  showScreen(screenName) {
    ['levelSelection', 'quizContainer', 'resultContainer'].forEach(screen => {
      const element = document.getElementById(screen);
      if (element) {
        element.style.display = screen === screenName ? 'block' : 'none';
      }
    });
  }
  
  // Atualização da interface
  updateProgress() {
    const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${this.currentQuestionIndex + 1}/${this.questions.length}`;
    progressBar.parentElement.setAttribute('aria-valuenow', Math.round(progress));
  }
  
  updateScore() {
    const scoreValue = document.querySelector('.score-value');
    if (scoreValue) {
      scoreValue.textContent = this.score;
    }
  }
  
  updateLevelIndicator() {
    const indicator = document.getElementById('levelIndicator');
    if (indicator) {
      indicator.textContent = `Nível ${this.currentLevel} - ${this.getLevelName(this.currentLevel)}`;
    }
  }
  
  // Ações do usuário
  goHome() {
    this.gameState = 'menu';
    this.showScreen('levelSelection');
    this.updateLevelButtons();
  }
  
  retryLevel() {
    this.startGame(this.currentLevel);
  }
  
  startNextLevel() {
    if (this.currentLevel < GAME_DATA.config.maxLevels) {
      this.startGame(this.currentLevel + 1);
    }
  }
  
  shareResult() {
    const percentage = Math.round((this.score / this.questions.length) * 100);
    const text = `🙏 Acabei de completar o Nível ${this.currentLevel} do Jogo Bíblico com ${percentage}% de acertos!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Jogo Bíblico - Resultado',
        text: text,
        url: window.location.href
      }).catch(console.error);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast('Resultado copiado!');
      });
    } else {
      this.showToast('Compartilhamento não suportado');
    }
  }
  
  // Utilitários
  showLoading(show) {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.style.display = show ? 'flex' : 'none';
    }
  }
  
  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => toast.remove(), 3000);
  }
}

// Inicialização e funções globais
document.addEventListener('DOMContentLoaded', () => {
  window.game = new BiblicalGame();
});

// DEFINA AS FUNÇÕES GLOBAIS PRIMEIRO
window.startGame = function(level) { 
  if (window.game) window.game.startGame(level);
}

window.checkLevel = function(level) { 
  if (window.game) window.game.checkLevel(level);
}

window.nextQuestion = function() { 
  if (window.game) window.game.nextQuestion();
}

window.goHome = function() { 
  if (window.game) window.game.goHome();
}

window.retryLevel = function() { 
  if (window.game) window.game.retryLevel();
}

window.startNextLevel = function() { 
  if (window.game) window.game.startNextLevel();
}

window.shareResult = function() { 
  if (window.game) window.game.shareResult();
}

// A classe BiblicalGame continua aqui...