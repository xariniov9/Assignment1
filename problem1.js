function setTimeoutSync(callback, n){
    var curT = new Date();
	while(new Date().getTime() < curT.getTime() + n){
	}
	var finalT = new Date();
	console.log(finalT - curT);
	callback();
}