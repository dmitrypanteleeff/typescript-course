


function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1;
}

fetchWithAuth('s', 'get');

let a: 'qwerty' = 'qwerty';

let method = 'post';

// fetchWithAuth('s', method); - выдаст ошибку, так как тут идёт проверка на тип

fetchWithAuth('s', method as 'post'); // as - каст к типу
