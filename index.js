document.addEventListener('click', (ev) => {
  // alert("You just clicked !");
  if (ev.target.id === 'expand') {
    ev.target.parentElement.classList.toggle('open');
  }
})
