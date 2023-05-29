function arithmeticProgression(start, diff, n) {
	let arr=[]
	for(let i=0;i<n;i++)
		{
		arr.push(start)
		start+=diff
		}
	return arr.join(", ")
}


function arrayLessThan100(arr) {
	return arr.reduce((a,b)=>a+b)<100
}


function arrIndex(arr, idx) {
	let arr2=arr.flat(Infinity)
	return idx.map(a=>arr2[a-1]).join("")
}

function lastItem(input) {
	return input[input.length-1]
}


function oddSum(numbers) {
	return numbers.map((a,i,arr)=>a+arr[i+1]).slice(0,-1).map(a=>a%2==0)
}


function outlierNumber(arr) {
  let even= arr.filter(a=>a%2==0)
  let odd= arr.filter(a=>a%2!=0)
  
  return even.length<=1?+even.join(""):+odd.join("")
  }


  function moveZeros(arr) {
    let arr1= arr.filter(a=>a===0)
    let arr2= arr.filter(a=>a!==0)
    
    return arr2.concat(arr1)
  }


  
  function countUppercase(str) {
	let sum=0
	for(let i=0;i<str.length;i++) {
		for(let j=0;j<str[i].length;j++){
				if(str[i][j]== str[i][j].toUpperCase()){
			
			sum++
		}
		}
	
	}
	return sum
}

function arraySum(nums) {
	return +nums.map(a=>{
		return a%2==0?a* a: Math.sqrt(a)
	}).reduce((a,b)=>a+b).toFixed(2)
}


function stringPairs(str) {
	return str.length==0?[]:str.length%2!=0?(str+"*").match(/../g):str.match(/../g)
}


function countCharacters(arr) {
	return arr.join("").length
}


function deNest(arr) {
	return arr.flat(Infinity).pop()
}



function rogerShots(arr) {
	return arr.filter(a=>a=="Bang!"||a=="BangBang!").length/2
}


function evenLast(arr) {
	return arr.filter((a,i,arr)=>{
		return i%2==0
	}).reduce((a,b)=>b*arr[arr.length-1]+a,0)
}


function unlucky13(nums) {
	return nums.filter(a=>a%13!=0)
}


// Fix this incorrect code so that all tests pass!
function removeEmptyArrays(arr) {
	return arr.filter(x => x !=false)
}


function divisible(arr) {
	return arr.reduce((ac,e)=>ac*e)% arr.reduce((ac,e)=>ac+e)==0
}


function findBob(names) {
	return names.indexOf("Bob")
}



function findLargestNum(arr) {
	return Math.max(...arr)
}


function findLargestNum(arr) {
	return arr.sort((a,b)=>b-a)[0]
}


function correctStream(user, correct) {
	let arr=[]
	 user.map((a,i)=>{
		if(correct[i]==a)arr.push(1)
		else arr.push(-1)
	})
	return arr
}


