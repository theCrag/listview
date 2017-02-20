var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;

var vm = new Observable();

function onNavigatingTo(args) {
    var page = args.object;

    //create the data array with counts elements
    vm.myItems = new ObservableArray(Array.from(Array(page.navigationContext.count).keys()));

    //bind the data to the view
    page.bindingContext = vm;

}

function itemTap(args) {
    vm.myItems.setItem(args.index, args.index + " *");
}

/*
 Exporting a function in a NativeScript code-behind file makes it accessible
 to the file’s corresponding XML file.
 */
exports.onNavigatingTo = onNavigatingTo;
exports.itemTap = itemTap;