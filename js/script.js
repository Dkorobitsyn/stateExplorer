function getDeterminant(){
    
    let matrix = [3];
    for (let i = 0; i < 3; i++) {matrix[i] = [3]};
    matrix [0][0] = document.getElementById('0_0').value;
    matrix [0][1] = document.getElementById('0_1').value;
    matrix [0][2] = document.getElementById('0_2').value;
    matrix [1][0] = document.getElementById('1_0').value;
    matrix [1][1] = document.getElementById('1_1').value;
    matrix [1][2] = document.getElementById('1_2').value;
    matrix [2][0] = document.getElementById('2_0').value;
    matrix [2][1] = document.getElementById('2_1').value;
    matrix [2][2] = document.getElementById('2_2').value;
    for (let i = 0; i<3; i++) { for (let j= 0; j < 3; j++) {console.log(i, j, matrix[i][j])}};
    let a = matrix[0][0]*matrix[1][1]*matrix[2][2];
    let b = matrix[0][0]*matrix[1][2]*matrix[2][1];
    let c = matrix[0][1]*matrix[1][0]*matrix[2][2];
    let d = matrix[0][1]*matrix[1][2]*matrix[2][0];
    let e = matrix[0][2]*matrix[1][0]*matrix[2][1];
    let f = matrix[0][2]*matrix[1][1]*matrix[2][0];
    
    console.log( a ,'-' , b, '-', c, '+', d, '+', e, '-', f);
    return console.log(a - b - c + d + e -f);
}