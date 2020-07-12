export const toRna = (strand) => {
  if (!strand) return ''
  const DNA = ["G", "C", "T", "A"] 
  const RNA = ["C", "G", "A", "U"] 
  let strands = strand.split('')
  return  strands.map((strand) => RNA[DNA.indexOf(strand)]).join('')
};
