export default {
  myVar1: [],
  myVar2: {},
  
  async checkNumberInDNC(phone) {
    try {
      // Execute the DNC_Check query
      let result = await DNC_Check.run({ PHONE: phone });
      
      // If the result is not empty, the number is in the DNC list
      if (result.length > 0) {
        showAlert('Your number is already on the DNC list.', 'info');
      } else {
        // If the number is not found, ask if they want to be added
        showModal('ConfirmDNCAddModal');
      }
    } catch (error) {
      console.error("Error checking DNC:", error);
      showAlert('An error occurred while checking the DNC list.', 'error');
    }
  },

  async addNumberToDNC() {
    try {
      // Execute the dncAdd query
      await dncAdd.run();
      showAlert('Your number has been added to the DNC list.', 'success');
      closeModal('ConfirmDNCAddModal');
    } catch (error) {
      console.error("Error adding to DNC:", error);
      showAlert('An error occurred while adding your number to the DNC list.', 'error');
    }
  }
}