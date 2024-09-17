Traffic Light Simulator


This project is a Traffic Light Simulator built using React. It simulates a traffic light system with features such as pedestrian crossing, emergency vehicle override, and a countdown timer for the lights. The lights are vertically aligned and centered in the UI for a clear and organized display.

Features
Traffic Light System

Includes three lights: Red, Yellow, and Green.
Lights follow the sequence: Green -> Yellow -> Red -> Green.
Each light stays on for a specific duration:
Green: 10 seconds
Yellow: 3 seconds
Red: 7 seconds
Pedestrian Crossing

A pedestrian can request to cross by pressing a button.
The system waits for the current cycle to finish and then changes the light to Red for pedestrians.
After the crossing request, the red light stays on for an additional 5 seconds before returning to the normal sequence.
Emergency Vehicle Override

An emergency button allows the traffic light to switch to Red immediately for 10 seconds.
After 10 seconds, the system resumes the normal cycle, starting from Green.
Countdown Timer

A countdown timer is displayed next to each light, showing the remaining time before the light changes.

The app will start on http://localhost:3000.

Usage
The traffic lights will cycle through automatically.
Press the Pedestrian Crossing button to request the light to turn red for pedestrians.
Press the Emergency Override button to switch the light to red immediately for emergency vehicles.
Styling
The project uses CSS Flexbox for layout and alignment. The traffic lights are styled as vertically stacked circles with smooth transitions between colors.

Customizing Styles
Modify App.css and index.css for global styles and layout adjustments.
Adjust the timing or behavior in TrafficLight.js for custom light durations or sequences.
Contributions
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

License
This project is open source and available under the MIT License.