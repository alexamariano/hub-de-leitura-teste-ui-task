   /// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Testes End To End do fluxo de cadastro e login', () => {

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve realizar o cadastro e, em seguida, o login com sucesso', () => {
        // 1. Criação da Massa de Dados 
        let emailDinamico = `teste${Date.now()}@teste.com`
        let nomeDinamico = faker.person.fullName()
        let senhaE2E = 'Teste@123'

        // 2. ETAPA DE CADASTRO
        cy.visit('register.html')
        
        cy.preencherCadastro(
            nomeDinamico,
            emailDinamico,
            '31987654321',
            senhaE2E,
            senhaE2E
        ) 

        // 3. ETAPA DE LOGIN
        cy.visit('login.html') 
        cy.login(emailDinamico, senhaE2E)
        
    });
});