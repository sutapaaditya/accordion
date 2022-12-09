document.addEventListener('click', (ev) => {
  // alert("You just clicked !");
  if (ev.target.id === 'expand') {
    // removing open class from previous element
    let pe = document.getElementsByClassName('item open');
    if (pe.length) {
      pe[0].classList.remove('open');
    } 
    // adding open class to parent of current element
    ev.target.parentElement.classList.add('open');
  }
})
