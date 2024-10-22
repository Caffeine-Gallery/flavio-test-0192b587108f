import Text "mo:base/Text";

actor {
  stable var greeting : Text = "Hello world flavio";

  public query func getGreeting() : async Text {
    return greeting;
  };

  public func setGreeting(newGreeting : Text) : async () {
    greeting := newGreeting;
  };
}
