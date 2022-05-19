Java.perform(function() {
    var clazz = Java.use('org.swiftapps.swiftbackup.common.V');
    clazz.getA.implementation = function() {
    var retval = this.getA();
    common.log(retval);
    if (retval == 0) {
       common.warn("[*] Premium Unlocked");
       return true;
       } else {
       return retval;
    }
  }
});