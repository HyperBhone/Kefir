fetch('faq.json')
  .then(response => response.json())
  .then(data => {
    const faqContainer = document.getElementById('faq-container');
    data.faqs.forEach(item => {
      const faqDiv = document.createElement('div');
      faqDiv.classList.add('faq-item');

      const question = document.createElement('h3');
      question.textContent = item.question;

      const toggleBtn = document.createElement('button');
      toggleBtn.textContent = 'ဖတ်ရန်';
      toggleBtn.classList.add('faq-toggle');

      const answer = document.createElement('p');
      answer.textContent = item.answer;
      answer.classList.add('faq-answer');
      answer.style.display = 'none';

      toggleBtn.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
      });

      faqDiv.appendChild(question);
      faqDiv.appendChild(toggleBtn);
      faqDiv.appendChild(answer);
      faqContainer.appendChild(faqDiv);
    });
  })
  .catch(error => console.error('Error loading FAQ:', error));
