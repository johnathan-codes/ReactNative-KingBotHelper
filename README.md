# King bot helper
Mobile helper for https://github.com/scriptworld-git/king-bot-api

# Install
  - install chocolatey
  - run: choco install -y nodejs.install python2 jdk8
  - npm install -g react-native-cli
  - git clone
  - npm install

# Run
  - npm start

# Run on your device
  - install expo app from store
  - Scan QR code (use tunnel option)

# Run on emulator (similar to running on your device)
  - Install android studio -> after installed run Android Studio and check following settings:
    - Android SDK
    - Android SDK Platform
    - Performance (Intel ® HAXM)
    - Android Virtual Device
  - Install Android SDK
    - Follow instructions on this page https://facebook.github.io/react-native/docs/getting-started   (Building Projects with native code)
  - For emulator run commands (https://stackoverflow.com/questions/42718973/run-avd-emulator-without-android-studio):
    - cd ~/Android/Sdk/tools/bin && ./avdmanager list avd
    - this will give you name of installed emulator
    - cd ~/Android/Sdk/tools && ./emulator -avd NAME_OF_YOUR_DEVICE
  

# Features
  - get resources
  
## Get resources
  - Write URL of your server, where is your bot running (ex. 10.10.10.10:port) !!!Do not put "https://" or "http://" in the input field.
  - After clicking on "Get Resources" button a list of your villages with current warehouse/granary will be shown
  https://prnt.sc/lq4o9g