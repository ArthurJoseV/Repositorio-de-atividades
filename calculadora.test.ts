import { describe, it, expect } from 'vitest';
import { somar, subtrair, multiplicar, dividir } from "./calculadora.js";

describe("calculadora", () => {

    // testes da soma
    describe("somar", () => {
        it("deve somar dois numeros", () => {
            expect(somar(1, 2)).toBe(3);
        });

        it("deve retornar o proprio numero quando soma com zero", () => {
            expect(somar(5, 0)).toBe(5);
        });

        it("deve funcionar com numeros negativos", () => {
            expect(somar(-3, -7)).toBe(-10);
        });

        it("soma de positivo com negativo", () => {
            expect(somar(10, -4)).toBe(6);
        });

        it("deve somar decimais corretamente", () => {
            expect(somar(0.1, 0.2)).toBeCloseTo(0.3);
        });

        it("soma com numeros grandes", () => {
            expect(somar(1000000, 2000000)).toBe(3000000);
        });
    });

    // testes da subtração
    describe("subtrair", () => {
        it("deve subtrair dois numeros", () => {
            expect(subtrair(5, 2)).toBe(3);
        });

        it("subtrair zero nao muda nada", () => {
            expect(subtrair(5, 0)).toBe(5);
        });

        it("deve dar negativo quando subtrai um numero maior", () => {
            expect(subtrair(2, 5)).toBe(-3);
        });

        it("subtração de dois negativos", () => {
            expect(subtrair(-3, -7)).toBe(4);
        });

        it("negativo menos positivo", () => {
            expect(subtrair(-5, 3)).toBe(-8);
        });

        it("deve funcionar com decimais", () => {
            expect(subtrair(5.5, 2.3)).toBeCloseTo(3.2);
        });
    });

    // testes da multiplicação
    describe("multiplicar", () => {
        it("deve multiplicar dois numeros", () => {
            expect(multiplicar(2, 2)).toBe(4);
        });

        it("qualquer coisa vezes zero da zero", () => {
            expect(multiplicar(5, 0)).toBe(0);
        });

        it("multiplicar por 1 retorna o mesmo valor", () => {
            expect(multiplicar(7, 1)).toBe(7);
        });

        it("negativo vezes negativo da positivo", () => {
            expect(multiplicar(-3, -4)).toBe(12);
        });

        it("positivo vezes negativo da negativo", () => {
            expect(multiplicar(3, -4)).toBe(-12);
        });

        it("multiplicação com decimal", () => {
            expect(multiplicar(2.5, 4)).toBeCloseTo(10);
        });
    });

    // testes da divisão (incluindo divisão por zero)
    describe("dividir", () => {
        it("deve dividir dois numeros", () => {
            expect(dividir(4, 2)).toBe(2);
        });

        it("deve dar erro quando tenta dividir por zero", () => {
            expect(() => dividir(10, 0)).toThrow("Não é possível dividir por zero");
        });

        it("divisão que resulta em decimal", () => {
            expect(dividir(7, 2)).toBe(3.5);
        });

        it("zero dividido por qualquer numero da zero", () => {
            expect(dividir(0, 5)).toBe(0);
        });

        it("negativo dividido por negativo da positivo", () => {
            expect(dividir(-10, -2)).toBe(5);
        });

        it("positivo dividido por negativo da negativo", () => {
            expect(dividir(10, -2)).toBe(-5);
        });

        it("divisão com decimais", () => {
            expect(dividir(5.5, 2.5)).toBeCloseTo(2.2);
        });

        it("dividir por 1 retorna o mesmo numero", () => {
            expect(dividir(42, 1)).toBe(42);
        });
    });
});
