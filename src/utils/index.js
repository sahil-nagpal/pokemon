export const getRandomColor = function() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

export const getThreeWords = function(name){
    if (name.length <= 2){
        return name.toUpperCase()
    }
    else{
       return  name.slice(0,2).toUpperCase()+name[name.length -1].toUpperCase()
    }
}

export const  getAnyColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}