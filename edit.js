
"use strict";
{
    let edit = {
        templateUrl :"edit.html",
        controller: function(userService){
            let vm = this;

            return function(edit){  //pushing edit?
              edit.push(edit);
            }

            vm.user = userService.setUser(); //setUser because you're editing profile?

            // return {
            //   setUser,
            //   getUser
            // }  //?
        }

        }
            edit.$inject = ["userService"];
            angular
                .module("profile")
                .component("edit", edit);
        }
