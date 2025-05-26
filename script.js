const textElement = document.querySelector('.typewriter-text');
const continueBtn = document.getElementById('continueBtn');

const message = `Efsaneye göre Aster çiçeği bulunduğu yeri güzelleştirirmiş.
En sevdiğin çiçek falan bırakalım bir kenara,
hangi çiçeğe daha çok benzediğini bulduk biz senin :)`;

let index = 0;

function typeWriter() {
  if (index < message.length) {
    textElement.textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  } else {
    continueBtn.style.display = "inline-block";
  }
}

continueBtn.style.display = "none";
window.onload = typeWriter;
