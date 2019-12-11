(In progress)
How to use

- Run NPM Start on the directory
    - The package has the prestart command of NPM install so it will automatically 
- Go to relevant IP and it will load into the splash screen
- On first run, click new file and this will take you into the editor
- The hotkeys can be found in both the splash screen and in the editor
- The buttons found in the top left hand corner of the screen do the same things as the hotkeys. They are there for devices without keyboards
- To save a file under a name type a name in the text input and click save as. This will save the contents of the textarea to the local storage as    "saveFile:FileName"
- The file can now be seen in the nav bar on the left hand sied of the editor. You can open any file from this nav bar
- To delete a file, open the file in question, click the delete button and then refresh the page
- To download a file simply click the download file button and it will download a txt file with the name you have saved it as

Current Features

- Indent / Outdent (Hotkeys and buttons)
- Move line up and down (Hotkeys and buttons)
- Save File to local storage
- Open files through easy to use nav bar
- Delete files (requires a refresh to update the nav bar)
- Download file as .txt

Future Features

- Add service worker to allow the user to download the app
- Add postgreSQL database for storage
- Add in QUnit testing to allow for easy future bug testing

Problems that Occured

- Attempted to add QUnit test however I was unable to spend the time to learn how to create proper testing.
