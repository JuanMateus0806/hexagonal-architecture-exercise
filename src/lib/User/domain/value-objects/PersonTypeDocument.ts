export class PersonTypeDocument{
   value:string;


   constructor(value:string) {
     this.value = value;
     this.valueIsValid()
   }

   private valueIsValid(){
     if (this.value.length == 2){
       if (!['CC', 'CE', 'TI'].includes(this.value)) {
         throw new Error('Type document invalid');
       }
     }
   }
}