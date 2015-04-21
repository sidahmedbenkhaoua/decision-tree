/**
 * Created by sidahmed on 22/01/15.
 */
app.controller('applicationController', function ($scope, $location, $http) {

    $scope.attribues = Array();
    $scope.attribue = {};
    $scope.values = Array();
    $scope.valuesOfAllAttribues = Array();
    $scope.addAttribue = function () {
        if ($scope.attribue.name == null) {
            alert("inséré le nom attribue");
        } else {

            $scope.attribues.push($scope.attribue);
            $scope.attribue = {};
        }
    }
    $scope.disabled = function () {
        if ($scope.attribues.length != 0) return false
        else return true;
    }
    $scope.deleteAttribue = function (index) {
        $scope.attribues.splice(index, 1);
    }
    $scope.creatTable = function () {
        $scope.values = Array();
        angular.forEach($scope.attribues, function (item) {

        });
        $scope.value = {}
    }
    $scope.start = function () {
        var i = 1;
        var k = 0;
        var nodes = Array();
        $http.get("resources/json/file.json").success(function (response) {
            $scope.json_file = response;
            angular.forEach($scope.json_file, function (item) {

                angular.forEach(item.values, function (value) {

                    if ($scope.values.indexOf(value.name) < 0) {
                        $scope.values.push(value.name);
                    }
                });

                $scope.valuesOfAllAttribues.push({
                    attribue: i,
                    values: $scope.values
                });
                if (i > 1) {
                    for (j = 0; j < Math.pow(2, k); j++) {

                        nodes.push({
                            id: i,
                            label: item.attribue + "" + i
                        });
                        nodes[i - 1]["level"] = k;
                        i++;
                    }

                } else {
                    nodes.push({
                        id: i,
                        label: item.attribue + "" + i
                    });
                    nodes[i - 1]["level"] = k;
                    i++;
                }
                k++;
                //find values of attribues
                $scope.values = Array();
            });

            $scope.valuesOfAllAttribues
            var edges = [];
            var size = nodes.length;

            edges.push({
                    from: 1,
                    to: 2,
                    label:$scope.valuesOfAllAttribues[0].values[0]
                },
                {
                    from: 1,
                    to: 3,
                    label:$scope.valuesOfAllAttribues[0].values[1]
                });
            for (i = 2; i < size; i++) {
                edges.push({
                        from: i,
                        to: i + i,
                        label:$scope.valuesOfAllAttribues[0].values[0]
                    },
                    {
                        from: i,
                        to: i + i + 1,
                        label:$scope.valuesOfAllAttribues[0].values[1]
                    });
            }
            var container = document.getElementById('mynetwork');
            var data = {
                nodes: nodes,
                edges: edges
            };
            var options = {
                hierarchicalLayout: {
                },
                nodes: {
                    shape: 'box'
                }
            };
            var network = new vis.Network(container, data, options);
            
        });
        //meting decision

    }


    function findFirstValueOfAttribue(id){

        angular.forEach($scope.valuesOfAllAttribues,function(item){
            if(item.attribue==id){
                return  item.values[1];
            }
        });
    }

    function findSecondValueOfAttribue(id){

        angular.forEach($scope.valuesOfAllAttribues,function(item){
            if(item.attribue==id){
                return  item.values[2];
            }
        });
    }
});