
# React-Native-Modal-Data-Passing

This repository contains the example code that complements the Medium article titled ["React Native Notes 34: Seamless Data Passing to React-Native-Modal"](https://freakycoder.com/react-native-notes-34-seamless-data-passing-to-react-native-modal-ef3b47b0e608). The project demonstrates the use of the `useImperativeHandle` hook to pass data to a modal with `react-native-modal`.

## Overview

In this example, we showcase a pattern for dynamically updating the content of a modal in a React Native application. By leveraging the `useImperativeHandle` hook along with `forwardRef`, we enable parent components to invoke methods on the modal component's ref, allowing for the passing of data directly before the modal is made visible.

## Getting Started

To run this project on your machine, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-native-modal-data-passing.git
   ```
2. Navigate to the project directory:
   ```sh
   cd react-native-modal-data-passing
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
   or if you use Yarn:
   ```sh
   yarn
   ```
4. Run the project:
   ```sh
   npx react-native run-android
   ```
   or for iOS:
   ```sh
   npx react-native run-ios
   ```

## Features

- Use of `forwardRef` and `useImperativeHandle` hooks for functional component communication.
- Demonstration of dynamically passing data to a modal upon opening.

## Contributing

If you wish to contribute to this project or have any suggestions/fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Acknowledgments

- A special thanks to the readers and supporters of the Medium article that inspired this example project.
- The React Native community for continuous collaboration and support.

## Find Me on Medium

Check out my [Medium profile](https://freakycoder.com/react-native-notes-34-seamless-data-passing-to-react-native-modal-ef3b47b0e608) for more articles on React Native and mobile development.

Happy Coding!
