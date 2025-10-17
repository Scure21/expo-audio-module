# Expo Custom Local Module Example

A demonstration project showcasing how to create and integrate custom native modules in Expo applications with [Expo Modules API](https://docs.expo.dev/modules/overview/). This example implements an audio route detection module with full native implementations for both iOS and Android platforms.

## 🎯 Overview

This project demonstrates creating a local Expo module that bridges native iOS (Swift) and Android (Kotlin) functionality to React Native. The `expo-audio-route` module detects and monitors audio output routing changes in real-time (headphones, Bluetooth, speaker, etc.).

## 🎥 Video

https://github.com/user-attachments/assets/d7f55e6b-df65-42fa-8b08-081aec8a7c02



## 🛠️ Technical Highlights

### Custom Native Module Development

- **Local Module Architecture**: Implements a fully functional local Expo module with proper module configuration
- **Native Platform Integration**:
  - iOS implementation in **Swift** using AVAudioSession framework
  - Android implementation in **Kotlin** using AudioManager APIs
- **Event-Driven Architecture**: Real-time audio route change notifications using native event emitters
- **Async Native Methods**: Demonstrates async/await patterns for native-to-JavaScript communication

### Module Features

- 🎧 Real-time audio route detection (Bluetooth, wired headset, speaker, etc.)
- 📡 Native event listeners for audio route changes
- ⚡ Async function calls from JavaScript to native code
- 🔄 Proper lifecycle management (observer registration/cleanup)
- 📦 TypeScript type definitions for type-safe development

## 📋 Module Structure

```
modules/expo-audio-route/
├── android/                 # Android native implementation (Kotlin)
├── ios/                     # iOS native implementation (Swift)
├── src/                     # TypeScript interfaces and types
├── expo-module.config.json  # Expo module configuration
└── index.ts                 # Module entry point
```

## 🔧 Key Concepts Demonstrated

1. **Expo Module API**: Leveraging Expo's modern module API for streamlined native module development
2. **Platform-Specific Code**: Writing native code in Swift and Kotlin
3. **Event Emitters**: Broadcasting native events to JavaScript listeners
4. **Native API Integration**: Working with AVAudioSession (iOS) and AudioManager (Android)
5. **TypeScript Integration**: Full type safety with custom type definitions

## 💻 Usage Example

```typescript
import ExpoAudioRouteModule, { AudioRoute } from "./modules/expo-audio-route";
import { useEventListener } from "expo";

// Listen for audio route changes
useEventListener(ExpoAudioRouteModule, "onAudioRouteChange", ({ route }) => {
  console.log("Audio route changed to:", route);
});

// Get current audio route
const currentRoute = await ExpoAudioRouteModule.getCurrentRouteAsync();
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run on iOS
npx expo run:ios

# Run on Android
npx expo run:android
```

## 📱 Technologies Used

- **Expo SDK** (v54)
- **React Native** (v0.81)
- **TypeScript**
- **Swift** (iOS native)
- **Kotlin** (Android native)
- **Expo Modules API**

## 🎓 Learning Outcomes

This project serves as a practical reference for:

- Creating custom native modules without ejecting from Expo
- Bridging native iOS/Android APIs to React Native
- Implementing event-driven communication between native and JavaScript
- Structuring and organizing local Expo modules
- Writing type-safe native module bindings

---

**Note**: This is a portfolio/learning project demonstrating native module development patterns in Expo. For production use cases, consider publishing the module as a standalone package or using existing community modules.
