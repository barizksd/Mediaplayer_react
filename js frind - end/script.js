class landing {
    database = {
        "Arun": { username: "Arun", password: "Arun" },
        "Sam": { username: "Sam", password: "Sam" },
        "Leena": { username: "Leena", password: "Leena" },
        "Jack": { username: "Jack", password: "Jack" },
    }
    // save
    saveData() {
        if (this.database) {
            localStorage.setItem("database", JSON.stringify(this.database))
        }
    }

    // get
    getData() {
        this.database = JSON.parse(localStorage.getItem("database"))
        console.log(this.database);

    }

    // register
    register() {
        console.log(regUser.value);
        console.log(regPswd.value);
        if (regUser.value == "" || regPswd.value == "") {
            alert(Enter Username and Password)
        } else {
            if (regUser.value in this.database) {
                alert(Enter already exist)
                window.location = 'login.html'
            } else {
                this.database[regUser.value] = { username: regUser.value, password: regPswd.value }
                obj.saveData()
                alert(Registered successfully)
                window.location = 'login.html'

            }
        }
    }
    // login
    login() {
        console.log(loginuser.value);
        console.log(loginpswd.value);
        if (loginuser.value == "" || loginpswd.value == "") {
            alert(Enter Username and Password)

        } else {
            if (loginuser.value in this.database) {
                if (this.database[loginuser.value].password = loginpswd.value) {
                    localStorage.setItem("user", loginuser.value)
                    alert(login successfully)
                    window.location = home.html

                } else {
                    alert(incorrect password or username)
                }

            } else {
                alert(Account doesnot existe and Please register)
            }


        }
    }
}
const obj = new landing()
// obj.saveData()
obj.getData()




// API - application programming interface 

    // 1. application progrtamming interface 
    // 2. used to communicate between two apllication available on Internet 

    // types of api 
    //  1. public api 
            // publicaly accessble 

    //  2. private api 
            // to accessible a single company or community 

    //  3. artner api 
            //colabration api to patner accessed more companys

    //  4. composite apo 
            // inter conection net works api is all types of connection accesseble 

// API - Architechure

     //1. Restfull api
            // to refr - https, ftp, smptp, udp .. etc 

    // 2. Soap api 
     //3. RCP Architecture 

    //  http - hyper text transfer protocol
        // .Set of rules neet to be allowed Whie Communicate through internet 
        
    // http request 
        // 1. POST - TO SEND DATA
        // 2. GET  - TO RETRIVE DATA
        // 3. PUT - TO UPDATE DATA
        // 4. DELETE - TO REMOVE DATA 

        // JSON - javaScript Object Notation 
        // common formate to communicate between the two applications 

        // formate 
        // {
        //     key : "value " - key and value must be in string 
        // }

        // Request 
            // .Two parts
            // 1. Head - type of data, authorization 
            // 2. body - data json formate 

        // response 
        // 1. 1xx ( 100 - 199) - information
        // 2. 2xx (200 - 299) - success response
        // 3. 3xx (300 - 399) - redirection
        // 4. 4xx (400 - 499) - client side error 
        // 5. 5xx (500 - 599) - server side error

        // URL - Uniform resource locator 
        // address of resource locator ( to find the location of the apllication on the internet)


        // .............                                                .............
        // .           . ---------------> Request --------------------> .            .
        // .           .                                                .            .
        // . client    . <--------------- response <------------------- .   Server   .                  
        // .............                                                ..............

// api testing tools 
    // 1. Thunder client - > vs code 
    // 2. postman - real tool 

    // different techniques to create API 

    // 1. AJAX 
            // Asynchronous javascript XML 
            // .xmlhttperquest() class -predefined
            // .open() - connect with application
            // .send() - to send request to the apllication
            // .redystate() property indide the class
            // .it changes value from 1 to 4 - onreadystatechange()
            // .when the radystate valur reaches 4 we will recevied Response. time delay at 4 counts
            //responseText -> Response is received in the property
    // 2. FETCH
        // .promise() - class
        // 3 phase / satate 
        //     1.resolve - then()
        //     2.pending 
        //     3. Reject

            
    // 3. ASYNC await
        // - can store the data in avariable 
        // - single .then()
        // 
    // how javacript handles both synchronuous and asynchronous function thogether.

    // 1. event loop - it all program rading to excuted line by line 
    // 2. then called callstack - ccall stack is syhnorounous way its calculate for way who is fist comes to the stack Array
    // 3. higher priority - Api calls - its microstack queue the first coms to without delay its first cerve for callstack 
    // 4. callbakc queue its delay propertys it can use delay programs comes to in the exicution

