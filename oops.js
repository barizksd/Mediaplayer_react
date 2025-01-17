 // note new opps 

    // 1) inheritance
    // 2) pliymorphism
    // 3) encapsulation
    // 4) abstraction

    // inheritance : - 
    // . usded to acces properties and method of one class to another class.
    // . keyword - extends
    // . 

    // program oops 

    // class a {
    //     bike(){
    //         console.log("its a baike not a car");
    //     }
    // }

    // class b extends a {
    //     car(){
    //         console.log("its a car not a baike");
    //     }
    // }


    // note - prent class - > from where the propertiesand methods are accessed 
    //                         super class / base class.
    // child class - > the class which access the properties and methos 
    //                         sub class / drived class

    // object inheritance ->  Keyword__proto__


    // const baleno ={
    //     model : "Hatch back",
    //     varient : ["automatic", "manual"],
    //     manufacture : " Maruthi"

    // }

    // glanza = {
    //     manufacture : "toyota"
    // }
    // glanza


// multilevel inheritance : -

    // .> access methods and roperties indirectly from parents classes

    // class a {
    //     methodA(){
    //         console.log("inside metode a");
            
    //     }
    // }
    // class b extends a{
    //     methodB(){
    //         console.log("inside metode b");
            
    //     }
    // }
    // class c {
    //     methodc(){
    //         console.log("inside methode c")
    //     }
    // }

    // const obj = new c();
    //     obj.methodc
    // obj.methodC
    // obj.methodB
    // obj.methodA

    // console.log("new matheods this is ")
    // polymorephism : - 

    // poly - MediaEncryptedEvent
    // morphishm - forms

    // 1> method oveloading 
    //    .Mehods with same name but different arguments
    //     .Mehods>i t executes based on the number of arguments
     //   .javascreep method oveloading is not working is object oriented program 
    //    .is posible used to spred element ... use three dots (spred operator is arrey to exicution )

    // eg -

        // class A {
        //    add(...arg){
        //     console.log(arg);
        //     return arg.reduce((n1,n2)=>n1+n2)
        //    }
        // }

        // const obj = new A();
        // console.log(obj.add(2,8,3,5,2,3,4));


    // 2> Methode overriding : -
        // .Methods with same name and same number of arguments
        // .executes last writeen method
        // .javaScrip supports in method

        // eg : -

        // class A {
        //     method(){
        //         console.log("first");
                
        //     }
        // }
        // class B extends A{
        //     methodA(){
        //         console.log("second");
                
        //     }
        //     methodA(){
        //         console.log("third");
                
        //     }
        // }
        
        // const obj = new B();
        // obj.methodA()

        // to pending sellf study 
        // 3 and 4 methods 
    

        // Exception Handlng ------ >

        // . Exceotion : run time error
        // .try-catch block 

        // syntac:-
            // try{
            //     statements -> whose statements 
            // }
                // catch{

                // }
                //finaly{
                // }

        // exp = "10/2*3"
        // try{
        //     result =eval(exp)
        //     console.log(result);
            
        // }
        // catch{
        //     console.log("incorrect Expression");
            
        // }
        // finally{
        //     console.log("execution ended");
            
        // }
        // n1 =10;
        // n2 =20;
        // sum = n1+n2;
        // console.log(sum);
        