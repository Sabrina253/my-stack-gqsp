const stack = require('./stack');

beforeEach(() => {
    s = new stack();
});
test('Testar pilha vazia na criação', () => {
    expect(s.isEmpty()).toEqual(true);
});

test('Testar pilha não vazia', () => {
    s.push(5);
    expect(s.isEmpty()).toEqual(false);
});

test('Testar pilha não vazia após inserir e remover um elemento', () => {
    s.push(5);
    s.pop();
    expect(s.isEmpty()).toEqual(true);
});

test('Verificar tamanho da pilha', () => {
    s.push(65);
    s.push(5);
    s.push(7);
    expect(s.size()).toBe(3);
});

test('Testar remover elemento de pilha vazia', () => {
    s.push(8);
    s.pop();
    expect(() => {s.pop()}).toThrow();
});

test('Testar quantidade de elemento na pilha', () => {
    s.push(2);
    s.push(3);
    expect(s.size()).toBe(2);
});

test('Testar tamanho da pilha após remover algum elemento, sem deixar pilha vazia', 
() => {
    s.push(1);
    s.push(23);
    s.push(37);
    s.pop();
    expect(s.size()).toBe(2);
});

test('Verificar se pilha estará vazia, após remover todos os elementos', 
() => {
    s.push(6);
    s.push(86);
    s.pop();
    s.pop();
    expect(s.isEmpty()).toEqual(true);
});

test('Testar se pilha possui elemento', () => {
    s.push(3);
    expect(s.isEmpty()).toEqual(false);
});

test('Testar quantidade de pilha chamando a função pop ', () => {
    s.push(7);
    s.push(7);
    s.push(7);
    s.push(3);
    s.push(7);
    s.pop();
    expect(s.pop()).toBe(3);
});

test('Verirficar tamanho da pilha após remover todos os elemntos', () => {
    s.push(8);
    s.push(5);
    s.pop();
    expect(s.size(s.pop())).toBe(0);
});

test('Verificar tamanho da pilha após add elementos', () => {
    s.push(3);
    s.pop();
    expect(s.size(s.push())).toBe(1);
});

test('Verificar se pilha está vazia após inserir elemento', () => {
    s.push(2);
    expect(s.isEmpty(s.pop())).toBe(true);
});

test('Testar remover elemento de pilha não vazia', () => {
    s.push(4);
    s.pop();
    expect(s.isEmpty()).toBe(true);
});