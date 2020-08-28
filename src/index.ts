import {Observable, pipe} from 'rxjs';
import {share} from 'rxjs/operators';

/*
 var observable1 = Observable.create((observer: any) => {
     observer.next('observable One is alive!');
     setInterval(() => {
         observer.next('observable One');
     }, 2500);
 });
 var observable2 = Observable.create((observer: any) => {
     observer.next('observable Two is alive!');
     setInterval(() => {
         observer.next('observable Two');
     }, 1500);
 });
 var subscription1 = observable1.subscribe(
     (x:any) => logItem(x, 1),    
 );
 var subscription2 = observable1.subscribe(
     (x:any) => logItem(x, 2),    
 );
 var subscription2 = observable2.subscribe(
     (x:any) => logItem(x, 2),    
 );
to stop the execution of the subscribe methode
 document.getElementById('unsubscribeBtn1').addEventListener('click', () => {
     subscription1.unsubscribe();
 });
to stop the execution of the subscribe methode
 document.getElementById('unsubscribeBtn2').addEventListener('click', () => {
     subscription2.unsubscribe();
 });
 document.getElementById('addsubscribeBtn').addEventListener('click', () => {
     subscription2.add(subscription1);
 });
 function logItem(val:any, column: any){
     var node = document.createElement('li');
     var textnode = document.createTextNode(val);
     node.appendChild(textnode);
     if(column == 2){
         document.getElementById("list2").appendChild(node);
     }else if(column == 1){
         document.getElementById("list1").appendChild(node);        
     }
 }
*/

/*
var observable1 = Observable.create((observer: any) => {
    observer.next('observable One is alive:' + Date.now());
});

document.getElementById('subscribeBtn1').addEventListener('click', () => {
    var subscription1 = observable1.subscribe(
        (x:any) => logItem(x, 1),    
    );
});


document.getElementById('subscribeBtn2').addEventListener('click', () => {
    var subscription2 = observable1.subscribe(
        (x:any) => logItem(x, 2),    
    );
});

function logItem(val:any, column: any){
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    if(column == 2){
        document.getElementById("list2").appendChild(node);
    }else if(column == 1){
        document.getElementById("list1").appendChild(node);        
    }
}
*/

var observable1 = Observable.create((observer: any) => {
    observer.next('observable One is alive:' + Date.now());
}).pipe(share());

document.getElementById('subscribeBtn1').addEventListener('click', () => {
    var subscription1 = observable1.subscribe(
        (x:any) => logItem(x, 1),    
    );
});


document.getElementById('subscribeBtn2').addEventListener('click', () => {
    var subscription2 = observable1.subscribe(
        (x:any) => logItem(x, 2),    
    );
});

function logItem(val:any, column: any){
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    if(column == 2){
        document.getElementById("list2").appendChild(node);
    }else if(column == 1){
        document.getElementById("list1").appendChild(node);        
    }
}

