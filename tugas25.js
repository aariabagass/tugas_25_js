var tenMore = () => {
  lineUp = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
  console.log("Sebelumnya : " + lineUp);
  console.log("Ascending : " + lineUp.sort());
  console.log("Descending : " + lineUp.reverse());
  scan = lineUp.filter((lineUp) => {
    return lineUp > 10;
  });
  console.log("Filter > 10 : " + scan);
}
tenMore();