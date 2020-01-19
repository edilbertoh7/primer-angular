import {Component} from  '@angular/core';

@Component ({
    selector: 'videojuegos', 
    templateUrl: './videojuegos.component.html'
})
/*se pueden crear las variables sin definir su tipo y asignarles valor inmediatamente
pero es mejor practica  declarar la variable con su tipo  y asignarles valor desde un constructor*/
/*export class videojuegosComponent{
    public nombre = 'video juegos 2020';
    public mejor ="GTA 5"
    public mejor_retro ="Super mario 64";
    public retro = false;
    public juegos = [//hola
        'FIFA','GTA 5','CALL OF DUTY','TEKKEN',
        'ANGRY BIRDS'
    ];
}*/

export class videojuegosComponent{
    public nombre:string ;
    public mejor: string;
    public mejor_retro:string;
    public retro: boolean;
    public juegos:Array<string>;
        constructor(){
            this.nombre = 'video juegos 2020KHKJHKJKJH';
            this.mejor ="GTA 5";
            this.mejor_retro ="Super mario 64";
            this.retro =true;
            this.juegos = [//hola
                'FIFA','GTA 5','CALL OF DUTY','TEKKEN',
                'ANGRY BIRDS'
            ];
         }
}