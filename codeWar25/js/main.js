function DNAStrand(dna) {
  var at = 'ATA';
  var cg = 'CGC';
  dnaArr = dna.split('');
  var complementaryDna = dnaArr.map(function(cur, ind, arr) {
    if(at.indexOf(cur) !== -1) {
      return at[at.indexOf(cur) + 1];
    } else {
      return cg[cg.indexOf(cur) + 1];
    }
  });
  return complementaryDna.join('');
}
