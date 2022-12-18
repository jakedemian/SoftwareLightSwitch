const bool _debug = true;
const int RELAY_PIN = 8;
const String TURN_ON = "ON";
const String TURN_OFF = "OFF";

bool isActive = false;

void setup() {
  Serial.begin(9600);
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    String received = Serial.readString();
    Serial.println(received);
    if (received == TURN_ON) {
      turnOn();
    } else if(received == TURN_OFF){
      turnOff();
    }
  }
}

void turnOn() {
  isActive = true;
  digitalWrite(RELAY_PIN, HIGH);

  if(_debug){
    digitalWrite(LED_BUILTIN, HIGH);
  }
}

void turnOff() {
  isActive = false;
  digitalWrite(RELAY_PIN, LOW);

  if(_debug){
    digitalWrite(LED_BUILTIN, LOW);
  }
}
