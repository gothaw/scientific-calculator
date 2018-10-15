export function factorial(number)
{
    if (number<0){
        throw "Factorial does not work for negative numbers";
    }
    if (number === 0)
    { return 1; }
    else
    { return number * factorial( number - 1 ); }
}