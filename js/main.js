
// Task1
function arithmeticProgression(start, diff, n) {
	let arr=[]
	for(let i=0;i<n;i++)
		{
		arr.push(start)
		start+=diff
		}
	return arr.join(", ")
}



// Task2
function arrayLessThan100(arr) {
	return arr.reduce((a,b)=>a+b)<100
}


// Task3
function arrIndex(arr, idx) {
	let arr2=arr.flat(Infinity)
	return idx.map(a=>arr2[a-1]).join("")
}


// Task4
function lastItem(input) {
	return input[input.length-1]
}


// Task5
function oddSum(numbers) {
	return numbers.map((a,i,arr)=>a+arr[i+1]).slice(0,-1).map(a=>a%2==0)
}



// Task6
function outlierNumber(arr) {
  let even= arr.filter(a=>a%2==0)
  let odd= arr.filter(a=>a%2!=0)
  
  return even.length<=1?+even.join(""):+odd.join("")
  }



  // Task7
  function moveZeros(arr) {
    let arr1= arr.filter(a=>a===0)
    let arr2= arr.filter(a=>a!==0)
    
    return arr2.concat(arr1)
  }


  

  // Task8
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



// Task9
function arraySum(nums) {
	return +nums.map(a=>{
		return a%2==0?a* a: Math.sqrt(a)
	}).reduce((a,b)=>a+b).toFixed(2)
}




// Task9
function stringPairs(str) {
	return str.length==0?[]:str.length%2!=0?(str+"*").match(/../g):str.match(/../g)
}



// Task10
function countCharacters(arr) {
	return arr.join("").length
}



// Task11
function deNest(arr) {
	return arr.flat(Infinity).pop()
}



// Task12
function rogerShots(arr) {
	return arr.filter(a=>a=="Bang!"||a=="BangBang!").length/2
}



// Task13
function evenLast(arr) {
	return arr.filter((a,i,arr)=>{
		return i%2==0
	}).reduce((a,b)=>b*arr[arr.length-1]+a,0)
}



// Task14
function unlucky13(nums) {
	return nums.filter(a=>a%13!=0)
}



// Task15
// Fix this incorrect code so that all tests pass!
function removeEmptyArrays(arr) {
	return arr.filter(x => x !=false)
}



// Task16
function divisible(arr) {
	return arr.reduce((ac,e)=>ac*e)% arr.reduce((ac,e)=>ac+e)==0
}



// Task17
function findBob(names) {
	return names.indexOf("Bob")
}




// Task18
function findLargestNum(arr) {
	return Math.max(...arr)
}




// Task19
function findLargestNum(arr) {
	return arr.sort((a,b)=>b-a)[0]
}



// Task20
function correctStream(user, correct) {
	let arr=[]
	 user.map((a,i)=>{
		if(correct[i]==a)arr.push(1)
		else arr.push(-1)
	})
	return arr
}



// Task21
function nextElement(arr) {
	if( arr[0]<0)return-Math.abs((arr[0]-arr[1]))+arr[arr.length-1]
return Math.abs(arr[0]-arr[1])+arr[arr.length-1]

}



// Task22
function foo(callback) {
	setTimeout(() => {
		callback("hello")
	}, 3000);
}

foo(function(value){
	console.log(value);
})




// Task23
function bar() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("helloword")
		}, 3000);
	})
}

bar().then(function name(value) {
	console.log(name);
})




// Task24
function canCapture([yourRook, opponentsRook]) {
	return yourRook[0]==opponentsRook[0]||yourRook[1]==opponentsRook[1]
}



// Task25
// Fix this code
function checkEquals(arr1, arr2) {
	if (arr1.join(", ") === arr2.join(", ")) {
  	return true
 	} else {
  	return false
 	}
}



// Task26
function addEnding(arr, ending) {
	return arr.map(a=>a+ending)
}



// Task27
function getSequence(low, high) {
	let arr1=[]
	for(let i=low;i<=high;i++){
		arr1.push(i)
	}
	return arr1
}



// Task28
function negate(arr) {
	return arr.map(a=>a<0?-a:-Math.abs(a))
}

console.log(negate([1, -2, 3, 4]));



// Task29
function isFourLetters(arr) {
	return arr.filter(a=>a.length==4)
}



// Task30
function difference(nums) {
	return Math.max(...nums)-Math.min(...nums)
}