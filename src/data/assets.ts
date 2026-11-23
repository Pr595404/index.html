/**
 * Central media map.
 * Loaded from real files in public/assets.
 */

export const assetRoot = `${import.meta.env.BASE_URL}assets`

export const profileAssets = {
  portrait: `${assetRoot}/profile/portrait.png`,
  portraitAlt: `${assetRoot}/profile/portrait.jpg`,
}

export const resumeAsset = {
  pdf: `${assetRoot}/resume/Prince_Kumar_Sahu_Resume.pdf`,
  available: true,
}

export const projectMedia = {
  'led-blinking': {
    photos: [`${assetRoot}/projects/led-blinking/cover.jpg`],
    video: `${assetRoot}/videos/led-blinking.mp4`,
    rawVideo: `${assetRoot}/videos/ee1.mp4`,
  },
  'bluetooth-led': {
    photos: [`${assetRoot}/projects/bluetooth-led/cover.jpg`],
    video: `${assetRoot}/videos/bluetooth-led.mp4`,
    rawVideo: `${assetRoot}/videos/ee2.mp4`,
  },
  'multiple-led': {
    photos: [`${assetRoot}/projects/multiple-led/cover.jpg`],
    video: `${assetRoot}/videos/multiple-led.mp4`,
    rawVideo: `${assetRoot}/videos/ee3.mp4`,
  },
  'radar-system': {
    photos: [`${assetRoot}/projects/radar-system/cover.jpg`],
    video: `${assetRoot}/videos/radar-system.mp4`,
    rawVideo: `${assetRoot}/videos/ee4.mp4`,
  },
} as const

export const galleryAssets = [
  {
    id: 'arduino-bench',
    src: `${assetRoot}/gallery/arduino-01.jpg`,
    title: 'Arduino Microcontroller Test Bench',
    caption: 'Breadboard circuit wiring, pin connections, and USB serial flashing.',
    category: 'Projects',
    tag: 'Hardware',
  },
  {
    id: 'ultrasonic-radar',
    src: `${assetRoot}/gallery/lab-01.jpg`,
    title: 'Ultrasonic Pulse Timing Setup',
    caption: 'Trigger and echo pin analysis for spatial distance calculation.',
    category: 'Projects',
    tag: 'Sensors',
  },
  {
    id: 'campus-mru',
    src: `${assetRoot}/gallery/campus-01.jpg`,
    title: 'Manav Rachna University Campus',
    caption: 'Academic environment at School of Engineering & Technology.',
    category: 'Campus',
    tag: 'Academic',
  },
  {
    id: 'tech-workshop',
    src: `${assetRoot}/gallery/workshop-01.jpg`,
    title: 'Engineering Exploration Workshop',
    caption: 'Collaborative problem solving and hands-on system building.',
    category: 'Workshops',
    tag: 'Collaboration',
  },
  {
    id: 'code-editor',
    src: `${assetRoot}/gallery/studio-01.jpg`,
    title: 'C & Python Development Environment',
    caption: 'VS Code workspace for structured algorithm and logic implementation.',
    category: 'Life',
    tag: 'Software',
  },
  {
    id: 'bluetooth-comm',
    src: `${assetRoot}/gallery/event-01.jpg`,
    title: 'Wireless Serial Interface Testing',
    caption: 'Pairing HC-05 module with Arduino UART for remote telemetry.',
    category: 'Projects',
    tag: 'IoT',
  },
] as const

export const videoAssets = [
  {
    id: 'ee1',
    title: 'Arduino LED Blinking System',
    description: 'Demonstrating single LED digital output timing cycles and microcontroller pin control.',
    src: `${assetRoot}/videos/ee1.mp4`,
    tag: 'EE-01 · Output',
    duration: 'Demonstration',
    available: true,
  },
  {
    id: 'ee2',
    title: 'Bluetooth-Controlled LED System',
    description: 'Wireless Bluetooth communication enabling remote commands to trigger LED states.',
    src: `${assetRoot}/videos/ee2.mp4`,
    tag: 'EE-02 · Wireless',
    duration: 'Demonstration',
    available: true,
  },
  {
    id: 'ee3',
    title: 'Multiple LED Sequential Blinking',
    description: 'Multi-pin output coordination running sequential lighting patterns on breadboard.',
    src: `${assetRoot}/videos/ee3.mp4`,
    tag: 'EE-03 · Sequencing',
    duration: 'Demonstration',
    available: true,
  },
  {
    id: 'ee4',
    title: 'Arduino-Based Ultrasonic Radar',
    description: 'Ultrasonic sensor detecting distance through time-of-flight acoustic wave reflection.',
    src: `${assetRoot}/videos/ee4.mp4`,
    tag: 'EE-04 · Radar / Sensor',
    duration: 'Demonstration',
    available: true,
  },
  {
    id: 'ee5',
    title: 'Hardware Circuit Verification',
    description: 'Hands-on breadboard wiring check, power rail distribution, and microcontroller flash.',
    src: `${assetRoot}/videos/ee5.mp4`,
    tag: 'EE-05 · Lab Practice',
    duration: 'Demonstration',
    available: true,
  },
  {
    id: 'ee6',
    title: 'Microcontroller Bench Testing',
    description: 'Live testing of embedded logic routines, delay functions, and signal integrity.',
    src: `${assetRoot}/videos/ee6.mp4`,
    tag: 'EE-06 · Bench Test',
    duration: 'Demonstration',
    available: true,
  },
  {
    id: 'ee7',
    title: 'Engineering Exploration Synthesis',
    description: 'Comprehensive overview of hardware modules and systems built during first semester.',
    src: `${assetRoot}/videos/ee7.mp4`,
    tag: 'EE-07 · Full System',
    duration: 'Demonstration',
    available: true,
  },
] as const

export const certificateAssets: Array<{
  id: string
  title: string
  issuer: string
  src: string
}> = []
