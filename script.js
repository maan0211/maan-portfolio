// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = '#2575fc';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
document.body.prepend(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
