## useForm

The information it receives is an object with the different inputs that we want.

Example:
```
    useForm({
            name: '', <- input type text
            email: '', <- input type email
            password: '' <- input type password
        });
```

The values returned are values, handleInputChange, resetInput.