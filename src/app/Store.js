export default class Stotre{

    constructor(){            
    }

    checkMode(){ 
        console.log('hola...');
        const modeDark = localStorage.getItem('modeDark');            
        if( modeDark !== null && modeDark === 'true'){            
            this.changeSwitch();        
        }
    }   

    changeSwitch(){
        console.log('cambiar');
        document.body.classList.toggle('dark');
        document.querySelector('#switch').classList.toggle('active');
        
        if(document.body.className.includes('dark')){
            localStorage.setItem('modeDark', 'true');
        }else{
            localStorage.setItem('modeDark', 'false');    
        }
    }
}