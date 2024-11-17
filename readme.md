## Secrets 3

This is simply a copy of Secrets 2 where the .env file has been added to the gitignore to prevent it from being uploaded. 

To make this work a .env file will need to be added to the projects root directory with a key SECRET

```
SECRET=<your secret here>
```

---

The . in front of a file is syntactical sugar to say this file should be hidden from the UI or terminal. This however is not hidden if using libraries to search or query the file system. 