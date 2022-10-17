// .any la primera promesa que resuelva nos da la devuelve
// e ignora las otras

//weakref
class AnyClass {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
}
