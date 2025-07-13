function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openBookTableModal');
  const modal = document.getElementById('modal-book-table');
  const closeBtn = modal.querySelector('.close-button');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // или 'block' — зависит от твоей CSS-разметки
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});