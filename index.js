fetch('faq.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('faq-container');
    container.innerHTML = ''; // Clear previous content

    data.faqs.forEach(faq => {
      const faqItem = document.createElement('div');
      faqItem.className = 'faq-item';

      // Question text (not clickable)
      const questionText = document.createElement('span');
      questionText.className = 'faq-question-text';
      questionText.textContent = faq.question;

      // Separate clickable button
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'faq-toggle-btn';
      toggleBtn.textContent = 'Show/Hide';

      // Answer div (hidden by default)
      const answerDiv = document.createElement('div');
      answerDiv.className = 'faq-answer';
      answerDiv.style.display = 'none';
      answerDiv.innerHTML = `<p>${faq.answer}</p>`;

      // Click toggles the answer
      toggleBtn.addEventListener('click', () => {
        answerDiv.style.display = answerDiv.style.display === 'block' ? 'none' : 'block';
      });

      // Layout: Question text + button in same line
      const questionContainer = document.createElement('div');
      questionContainer.style.display = 'flex';
      questionContainer.style.alignItems = 'center';
      questionContainer.style.gap = '10px'; // space between text and button
      questionContainer.appendChild(questionText);
      questionContainer.appendChild(toggleBtn);

      faqItem.appendChild(questionContainer);
      faqItem.appendChild(answerDiv);
      container.appendChild(faqItem);
    });
  })
  .catch(err => console.error('Failed to load FAQ JSON:', err));
