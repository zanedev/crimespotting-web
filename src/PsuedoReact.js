function create(element,name,append,reach){
	if (name[0]=='.' || name[0]=='#') name=name.match(/[^\.\#]+/)[0];
	if (append[0]=='.' || append[0]=='#') append=append.match(/[^\.\#]+/)[0];
	function all(){
		var appends=document.getElementsByClassName(append).length;
		for (i=0;i<appends;i++){	
			var create=document.createElement(element);
			create.className=name;
			document.getElementsByClassName(append)[i].appendChild(create);
		}
	}
	function choose(c){		
		var create=document.createElement(element);
		create.className=name;
		try{
			document.getElementsByClassName(append)[c].appendChild(create);
		}
		catch(err){
			for (i=0;i<c;i++){
				var create=document.createElement(element);
				create.className=name;
				document.getElementsByClassName(append)[0].appendChild(create);	
			}
		}
	}
	function last(){
		var create=document.createElement(element);
		create.className=name;
		var lastChild=document.getElementsByClassName(append).length - 1;
		document.getElementsByClassName(append)[lastChild].appendChild(create);
	}
	if (reach && reach[0]=='a'){
		all();
	}else if (typeof reach === 'number'){
		choose(reach);
	}else{
		last();
	}
}