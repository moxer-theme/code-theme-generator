## Contributing to this project

### Install required tools

First of all you need to install [Trascrypt](https://github.com/elasticdog/transcrypt) via [Homebrew](https://brew.sh/index_it):
```bash
brew install transcrypt
```

### Unlock files

TO unlock source files run this transcrypt command with data provided by repository owners (via `transcrypt --display`):

```bash
transcrypt -c <CIPHER> -p '<PASSWORD>'
```

## List all encrypted files

To list current encrypted files, you must run this transcrypt command:

```bash
transcrypt --list
```
