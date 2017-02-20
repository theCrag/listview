var Observable = require("data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        alert("TheCrag");
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 4;
    viewModel.message = getMessage(viewModel.counter);
    viewModel.pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
        "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

    viewModel.onTap = function () {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }

    return viewModel;
}

exports.createViewModel = createViewModel;