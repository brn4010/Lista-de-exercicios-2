function ehPalindromo(str) {
	const strLimpa = str.replace(/[\W_]/g, '').toLowerCase();
	const strReversa = strLimpa.split('').reverse().join('');
	return strLimpa === strReversa;
}
//Exemplo que usei para testar:
console.log(ehPalindromo("radar")); // verdadeiro
console.log(ehPalindromo("projeto")); // falso