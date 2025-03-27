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
	
	console.log(array);
	
	return array;
}

function gB(width, height)
{
	
	document.querySelector(".grid").innerHTML = "";
		
	let primes = generatePrimes(width * height);
	
	for (let rows = 0; rows < height; ++rows)
	{
		let rowDiv = document.createElement("div");
		
		rowDiv.classList.add("col");
		rowDiv.classList.add("col-" + rows);
		
		rowDiv.style.gridRow = rows;
		
		for (let cols = 0; cols < width; ++cols)
		{
			let gridValue = (width * rows) + cols;
			
			if (primes.includes(gridValue))
			{
				console.log(gridValue + " is prime. :)");
				
				let r = ((Math.random() * 100) + cols);
				let g = ((Math.random() * 100) + cols);
				let b = ((Math.random() * 100) + cols);
				let a = ((Math.random()));
				
				
				let colDiv = document.createElement("div");
				colDiv.classList.add("row");
				colDiv.classList.add("col-" + rows + "-row-" + cols);
				colDiv.style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
				colDiv.innerText = gridValue;
				
				rowDiv.appendChild(colDiv);
			}
		}
		
		document.querySelector(".grid").appendChild(rowDiv);
	}
}

function generateBackground(width, height)
{
	let primes = generatePrimes(width * height);
	
	for(let col = 0; col < width; ++col)
	{
		let colDiv = document.createElement("div");
		colDiv.classList.add("col");
		colDiv.classList.add("col-" + col);
		for (let row = 0; row < height; ++row)
		{
			
			if (primes.includes(((height) * row) + col))
			{
			let value = (height * row) + col;
			console.log("col: " + col);
			console.log("row: " + row);
			console.log("value: " + value);
				let r = ((Math.random() * 100) + row);
				let g = ((Math.random() * 100) + row);
				let b = ((Math.random() * 100) + row);
				let a = ((Math.random()));
				
				
				let rowDiv = document.createElement("div");
				rowDiv.classList.add("row");
				rowDiv.classList.add("col-" + col + "-row-" + row);
				rowDiv.style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
				colDiv.appendChild(rowDiv);
				rowDiv.innerText = value;
			}
		}
		document.querySelector(".grid").appendChild(colDiv);
	}
}