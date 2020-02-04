// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

(function () {
  alert("dfg");
  console.log('bookmarklet starting');
  console.log(window);
  let paragraphs = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = 'puppy';
  }
})();
