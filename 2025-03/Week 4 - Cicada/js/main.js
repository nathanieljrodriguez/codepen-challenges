/****************************************************************************************************
 *																									*
 * File Name: main.js																				*
 * Date: 2025-03-24																					*
 * Description: 																					*
 * 	This file contains the JavaScript functions required for the March CodePen project (Week 4).	*
 * 	This file only contains a single function. The function is generatePrimes(size).				*
 * 	This function is a prime generator. It generates primes by calculating a sieve given a size.	*
 * 	To prevent unexpected behavior, the function does type checking on the provided paramaeter		*
 * 	and throws an error if the provided parameter is not a number. 									*
 *																									*
 ****************************************************************************************************/

function generatePrimes(size)
{
	const MAX_SIZE = Math.floor(Math.sqrt(size));
	
	let array = new Array(size);
	
	if (typeof (size) === typeof (1))
	{
		for (let i = 0; i < size; ++i)
		{
			if (array[i] === -1 || i === 0 || i === 1)
			{
				array[i] = -1;
			}
			else
			{
				array[i] = i;
				
				for (let j = (2 * i); j < size; j += i)
				{
					array[j] = -1;
				}
			}
		}
	}
	else
	{
		throw new Exception("Parameter Exception - generatePrimes(array, size) - size is not a number.");
	}
	
	array = array.filter(element => (element !== -1));

	return array;
}