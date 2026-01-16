function retornaCarro(params) {
  return {
    modelo: "Golf",
    ano: 2012,
  };
}

console.log(
    Object.keys(retornaCarro()).forEach(e => console.log(e + retornaCarro()))
);
