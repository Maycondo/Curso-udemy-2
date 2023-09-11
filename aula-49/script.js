function retornafunçao() {
    const name = 'Michael';

    return function() {
        return name;
    };
};

const funçao = retornafunçao()
console.log(funçao)