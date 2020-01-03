let counter = document.querySelector('.counter');
const lowerCount = document.querySelector('#lowerCountBtn');
const addCount = document.querySelector('#addCountBtn');

let count = 0;

lowerCount.addEventListener('click',decrementCounter);
addCount.addEventListener('click',incrementCounter);

function incrementCounter (){
	count++;
	counter.innerHTML = count;
	if(counter.innerHTML>'0'){
		counter.style.color = '#50F91D'
	}
	else if(counter.innerHTML==='0'){
		counter.style.color = "white"
	}
	counter.animate([{opacity: '0.2'},{opacity: '1.0'}],
	{duration:1000,fill:'forwards'});
}

function decrementCounter (){
	count--;
	counter.innerHTML = count;
	if(counter.innerHTML<'0'){
		counter.style.color = '#FF1414'
	}
	else if(counter.innerHTML==='0'){
		counter.style.color = "white"
	}
	counter.animate([{opacity: '0.2'},{opacity: '1.0'}],
	{duration:1000,fill:'forwards'});
}