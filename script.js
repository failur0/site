const welcomeMessages = [
    { text: '• Hello', delay: 1000 },
    { text: '• Hola', delay: 1400 },
    { text: '• Bonjour', delay: 1600 },
    { text: '• Hallo', delay: 1800 },
    { text: '• مرحبا', delay: 2000 },
    { text: '• 你好', delay: 2200 },
    { text: '• Olá', delay: 2400 },
    { text: '• Ciao', delay: 2600 },
    { text: '• Konnichiwa', delay: 2800 },
    { text: '• Здравствуйте', delay: 3000 }
  ];
  
  const welcomeElement = document.querySelector('.welcome');
  
  welcomeMessages.forEach(({ text, delay }) => {
    setTimeout(() => {
      welcomeElement.textContent = text;
      if (text !== 'Hello') {
        welcomeElement.style.opacity = '1';
      }
    }, delay);
  });
  

  setTimeout(() => {
    welcomeElement.classList.add('fadeOut');
  }, 3100);
  