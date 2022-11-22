const {encode, decode} = require('../encodeDecode');

describe('Testa as funções encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('converte a vogal "a" no número 1', () => {
    expect(encode('asa')).toEqual('1s1');
  });
  it('converte a vogal "e" no número 2', () => {
    expect(encode('pente')).toEqual('p2nt2');
  });
  it('converte a vogal "i" no número 3', () => {
    expect(encode('kiwi')).toEqual('k3w3');
  });
  it('converte a vogal "o" no número 4', () => {
    expect(encode('osso')).toEqual('4ss4');
  });
  it('converte a vogal "u" no número 5', () => {
    expect(encode('umbu')).toEqual('5mb5');
  });
  it('O retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('classe').length).toEqual(6);
  });
  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('converte o número 1 na vogal "a"', () => {
    expect(decode('1s1')).toEqual('asa');
  });
  it('converte o número 2 na vogal "e"', () => {
    expect(decode('p2nt2')).toEqual('pente');
  });
  it('converte o número 3 na vogal "i"', () => {
    expect(decode('k3w3')).toEqual('kiwi');
  });
  it('converte o número 4 na vogal "o"', () => {
    expect(decode('4ss4')).toEqual('osso');
  });
  it('converte o número 5 na vogal "u"', () => {
    expect(decode('5mb5')).toEqual('umbu');
  });
  it('O retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('classe').length).toEqual(6);
  });
});
