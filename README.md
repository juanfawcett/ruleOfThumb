# RuleOfThumb

Rule of Thumb™️ tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. The website has the following requirement: they need to present their users with an easy way to share their opinion on each presented celebrity, using votes (thumbs up and down), and display the results to the user while the poll is open. These features should be available to all users, regardless of where they're accessing the website from, whether it's a smartphone, a tablet or a desktop computer.

## Install dependencies

Run `npm install` to install all dependencies that app needs. Remember that you need to have installed NodeJS (v16.15.0)
## Run App and Back End service

Run `npm run run-server` to deploy API to port 3000.
Run `ng serve` to deploy the app. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests, also you can run `npm run converage` to see the percentage of coverage.

## Documentation

You can see the documentation running `npm run generate-documentation` and then going to `http://localhost:4400/`.

## Docker capabilities

You can containerize the app running `npm run containerize`, the app will be deployed to 8080 port. Remember to have installed docker.

## Lint and Prettier

You can apply a lint and prettier fix running `fix-lint-and-prettier`.

## nvmrc

You can find a nvmrc file to use the specific node version.

## Notes

If you have any concern, don't hesitate to ping me in Whatsapp or Linked In.
I implemented some aditional features like Dark mode, billingual support, vote from header and more.
Configs like Dark mode, language or grid/list selection persist even when you refresh the page.