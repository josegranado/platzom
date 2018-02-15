const expect = require('chai').expect;

const platzom = require('..').default; 

describe('#platzom', function ()
{
    it('Si la papalbra termina en "ar", se le quitan esos dos caracteres.', function()
    {
        const translation = platzom("Programar");
        expect(translation).to.equal("Program");      
    });
    it('Si la palabra inicia con Z, se le añade "pe" al final', function()
    {
        const translation = platzom("Zorro");
        expect(translation).to.equal("Zorrope"); 
    });
    it('Si la palabra traducida tine 10 o más letras, Se debe partir a la mitad y unir con un guión de medio.', function()
    {
        const translation = platzom("abecedario");
        expect(translation).to.equal("abece-dario"); 
    });
    it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúcula y minúsculas.', function()
    {
        const translation = platzom("sometemos");
        expect(translation).to.equal("SoMeTeMoS"); 
        const translation2 = platzom("malayalam");
        expect(translation2).to.equal("MaLaYaLaM"); 
    });
});