/**
 * Created by allan on 06/02/17.
 */
var app = angular.module('FileUtilities',[]);
app.controller('fileUtilitiesCtrl',function ($scope) {
    $scope.elemento_base="henrique";
    $scope.quebra_linnha="";
    $scope.quebra_atributo="";
    $scope.regra_saida="";
    $scope.file="";

    $scope.processar = function () {
        alert("Processando");
    }
});

//
// <script>
// document.getElementById('file').onchange = function(){
//
//     var file = this.files[0];
//     console.log(file);
//     var reader = new FileReader();
//     reader.onload = function(progressEvent){
//         // Entire file
//         console.log(this.result);
//
//         // By lines
//         var lines = this.result.split('\n');
//         for(var line = 0; line < lines.length; line++){
//             console.log(lines[line]);
//         }
//     };
//     reader.readAsText(file);
// };
// </script>