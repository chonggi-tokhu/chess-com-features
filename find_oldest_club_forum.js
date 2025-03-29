var pagesarr=[];
var filtered=[];
var mypostsnumber=0;
function getpages(n,cbfunc,s=1){
    for (var i = s;i<n;i++){
        
        fetch("https://www.chess.com/clubs/forum/chess-com-korea?page="+i).then((data)=>data.text()).then(data=>{pagesarr.push({data:data,idx:i});return pagesarr;}).then((param)=>{if (param.length>=n-1){ cbfunc(param); }});
    }
}
/* 다음 코드를 주석 풀어서 사용 getpages(360,(param)=>{var keyword='by Iamprincess1000'; var arr0 = param.map((val,idx,arr)=> {if (val.data.match(keyword)!==null){return {idx:idx,val:val.data,i:val.idx}} else {return false}}).filter(val=>val);
arr0.forEach(val=>{var a = val.val.substring(val.val.search(keyword)-600,val.val.search(keyword)+600); console.log(a+',이 배열에서'+val.idx+'번째,'+val.i+'페이지'); filtered.push({contents:a,idx:val.idx,i:val.i}); mypostsnumber+=val.val.match(keyword).length; }); },1); */
