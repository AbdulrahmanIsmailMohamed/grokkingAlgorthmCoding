function countDown(i) {
    if (i === -1) return 1;
    console.log(i);
    countDown(i - 1);
}
countDown(5)