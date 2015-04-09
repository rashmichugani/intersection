function myIntersection(a, b){
	var list = _.intersection(a, b);
	var string = '';
	for (var i = 0; i < list.length; i++) {
		string = string.concat(list[i]);
		string = string.concat('</br>');
	}
	return string;
}