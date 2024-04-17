function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth('s', 'get');
var a = 'qwerty';
var method = 'post';
// fetchWithAuth('s', method); - выдаст ошибку, так как тут идёт проверка на тип
fetchWithAuth('s', method); // as - каст к типу
