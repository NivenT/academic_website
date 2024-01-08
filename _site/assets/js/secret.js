function boop() {
  console.log("Boop!");
}

function konami(callback) {
  let keys = [];
  const konami = '38,38,40,40,37,39,37,39,66,65,13';
  return (event) => {
    keys.push(event.keyCode);
    if (keys.toString().indexOf(konami) >= 0) {
      keys = [];
      callback();
    }
  };
}

window.addEventListener(
  'keydown',
  konami(() => {
    const msg = `Congrats! As a reward, press 'OK' to see a long-kept-secret video I was in from the early days of YouTube (or hit 'Esc' to ignore this).`;
    if (window.confirm(msg)) {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
  })
);

