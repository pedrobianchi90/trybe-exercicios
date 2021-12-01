
let n = 5;
let asteristik = '*';
let line = '';
let startPosition = n;

for (let li = 0; li < n; li += 1) {
    for (let ci = 0; ci <= n; ci += 1) {
        if (ci < startPosition) {
        line = line + ' ';
      } else {
        line = line + asteristik;
    }
}
console.log(line);
line = '';
startPosition -= 1;
}