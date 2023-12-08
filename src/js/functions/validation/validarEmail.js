import * as constants from "../../constants/constants";
import * as storage from "../storage/storage";

export function validarEmail(inputEmail) {
  constants.mensajeError.textContent =
    "The email address " + inputEmail + " is incorrect.";
  constants.mensajeError.style = "color: red; font-weight: bold";
  if (inputEmail === "") {
    constants.mensajeError.textContent = "Please, enter an email address.";
    constants.divContent.appendChild(constants.mensajeError);
  } else
  if (constants.validEmail.test(inputEmail)) {
    storage.addEmailToSessionStorage();
    // Clean if the email is correct.
    constants.mensajeError.textContent = "";
 
  } else {
    constants.divContent.appendChild(constants.mensajeError);
  }
}
