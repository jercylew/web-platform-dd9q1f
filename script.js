console.log('hello!');

window.addEventListener('load', function (event) {
  console.log(document.getElementsByClassName('dropdown-btn').length);
  var dropdown = document.getElementsByClassName('dropdown-btn');
  var i;


  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function () {
      console.log('clicked!');
      this.classList.toggle('active');
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
  }
});
