// Load single FAQ from JSON
fetch('faq.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('faq-container');
    container.innerHTML = ''; // Clear anything already inside

    if (data.faqs.length > 0) {
      const faqItem = document.createElement('div');
      faqItem.className = 'faq-item';

      const btn = document.createElement('button');
      btn.className = 'faq-question';
      btn.textContent = data.faqs[0].question;

      const answerDiv = document.createElement('div');
      answerDiv.className = 'faq-answer';
      answerDiv.innerHTML = `<p>${data.faqs[0].answer}</p>`;

      // Toggle answer visibility on click
      btn.addEventListener('click', () => {
        answerDiv.style.display = answerDiv.style.display === 'block' ? 'none' : 'block';
      });

      faqItem.appendChild(btn);
      faqItem.appendChild(answerDiv);
      container.appendChild(faqItem);
    }
  })
  .catch(err => console.error('Failed to load FAQ JSON:', err));