const sentence = "hello from narnia";
let counter = 0;
for (let i = 0; i < sentence.length; i++) {
  counter += 50;
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) console.log('');

  }, counter);
}