const toggleButton = document.getElementById('toggleButton');
const myPicture = document.getElementById('myPicture');

toggleButton.addEventListener('click', ()=> {
  if (myPicture.classList.contains('hidden')){
    myPicture.classList.remove('hidden');
    toggleButton.textContent = 'Hide Picture';
  } else {
    myPicture.classList.add('hidden');
    toggleButton.textContent = 'Show Picture';
  }
})