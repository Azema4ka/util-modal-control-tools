/**
 * Set to computed properties!
 * 
 * Example
 * data() {
 *  return {
 *    modal: {
 *      penalty: false,
 *    },
 *  },
 * },
 * computed: {
 *  modalControl() {
      return getModalControlTools(this.modal);
    },
 * }
 */

/**
 * @param {object} stateModal
 */
export default function getModalControlTools(stateModal) {
  return {
    /**
     * @param {string} modalName
     */
    open(modalName) {
      if (!(modalName in stateModal)) {
        throw new Error(
          `The specified modal name ${modalName} does not exist in the modal object!`
        );
      }

      stateModal[modalName] = true;
    },
    /**
     * @param {string} modalName
     */
    close(modalName) {
      if (!(modalName in stateModal)) {
        throw new Error(
          `The specified modal name ${modalName} does not exist in the modal object!`
        );
      }

      stateModal[modalName] = false;
    },
    resetAll() {
      const modalKeys = Object.keys(stateModal);

      modalKeys.forEach((key) => {
        stateModal[key] = false;
      });
    },
  };
}
