import * as constants from "../constants/constants";
import * as storage from "./storage/storage";

export function validarEmail() {
  constants.mensajeError.textContent =
    "The email address " + constants.inputEmail.value + " is incorrect.";
  constants.mensajeError.style = "color: red; font-weight: bold";
  if (constants.validEmail.test(constants.inputEmail.value)) {
    storage.addEmailToSessionStorage();
    // Clean if the email is correct.
    constants.mensajeError.textContent = "";
    // todo: after check show the list that i already have in localStorage.
    storage.getListFromLocalStorage();
  } else {
    constants.divContent.appendChild(constants.mensajeError);
  }
}
