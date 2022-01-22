/**
 *  data collection for debugging and tracing
 */

class Trace {
  constructor() {
    this.data = [];
  }

  /**
   *  generate unqie session id 37 characters long and return it
   * @return {string}
   * @private
   * @static
   */
  generateSessionId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let sessionId = "";
    for (let i = 0; i < 37; i++) {
      sessionId += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }

    return sessionId;
  }

  /**
   * get current platform
   * @return {string}
   * @private
   */
  getPlatform() {
    return navigator.userAgentData["mobile"] ? "mobile" : "web";
  }

  callback(data) {
    console.log(data);
  }

  /**
   *  get device location
   *
   */
  getLocationService() {
    // window.navigator.geolocation.getCurrentPosition(this.callback);
    console.log(window)
  }

}

export default Trace;
