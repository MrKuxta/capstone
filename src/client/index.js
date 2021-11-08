//kane import kai export ta panta




//import the main function of the application javascript
import { returnResults } from "./js/planner";
import { updateUI } from "./js/updateUI";
import { timeToTrip } from "./js/time";
import { today } from "./js/time";
import { dataFromAPI } from "./js/postrequest";

//import your scss

/*
import "./styles/base.scss"
import "./styles/footer.scss"
import "./styles/form.scss"
import "./styles/header.scss"
import "./styles/resets.scss"
*/

//export the main function of the application javascript

export {
    //styles,
    returnResults,
    updateUI,
    timeToTrip,
    today,
    dataFromAPI
}
