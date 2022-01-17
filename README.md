# goodgood619.github.io

* 개인적으로 궁금하거나, 잘 개념이 안 잡히는 부분들을 공부한 것들을 정리한 블로그입니다.
    * 제가 이해할 수 있는 형태로 썼기 때문에, 글을 읽기가 쉽지는 않으실 수도 있습니다.


<br/><br/>

### Ubuntu (Bash) 기준 (Ruby install)

---


```bash
sudo apt-get install ruby-bundler
bundle install
bundle exec jekyll serve
```

<br/><br/>

### mac OS (zsh) using brew

---

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew install rbenv ruby-build
sudo gem install bundler
bundle install
bundle exec jekyll serve
```