"use strict";
{
    function userService(){
    let user ={
        name: "Pusheen",
        contact: "Pusheen@catz.com",
        bio: "I love Zah w/ ronies"
    }
    const getUser = function(){
        return user;
    };

    const setUser = function(newUser){
        user = newUser;
    };

    return {
        getUser,
        setUser
    }
}


    angular
    .module("profile")
    .factory("userService", userService)

}
