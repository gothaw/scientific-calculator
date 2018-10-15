/**
 * @name        factorial
 * @desc        Returns factorial of a number. Works only for positive integers.
 * @param       number
 * @returns     {number}
 */
export function factorial(number)
{
    if (number<0){
        throw "Factorial works only for positive integer number";
    }
    if (number === 0)
    { return 1; }
    else
    { return number * factorial( number - 1 ); }
}
