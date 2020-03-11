const sentence = "hello there from lighthouse labs";
let timer = 0;
for (let i = 0; i < sentence.length; i++) {
  
  timer += 50;
  setTimeout(() => {
    process.stdout.write(sentence.charAt(i));
  }, timer);
  if (i === sentence.length-1) {
    setTimeout(() => {
      console.log('\n');
    }, timer)
  }
}
